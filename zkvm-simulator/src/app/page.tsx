'use client';

import { useState } from 'react';

interface Proof {
  id: string;
  program: string;
  input: string;
  output: string;
  verificationTime: number;
  proofSize: number;
  isValid: boolean;
  verifier: string;
}

interface Verification {
  id: string;
  program: string;
  proof: string;
  isValid: boolean;
  verificationTime: number;
}

const proofs: Proof[] = [
  {
    id: 'PROOF-001',
    program: 'add(a, b) => a + b',
    input: 'a=5, b=7',
    output: '12',
    verificationTime: 45,
    proofSize: '2.3 KB',
    isValid: true,
    verifier: 'zk-SNARK',
  },
  {
    id: 'PROOF-002',
    program: 'mul(a, b) => a * b',
    input: 'a=8, b=9',
    output: '72',
    verificationTime: 52,
    proofSize: '2.8 KB',
    isValid: true,
    verifier: 'zk-STARK',
  },
  {
    id: 'PROOF-003',
    program: 'hash(data) => Keccak256',
    input: 'hello',
    output: '0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824',
    verificationTime: 128,
    proofSize: '15.2 KB',
    isValid: true,
    verifier: 'zk-VM',
  },
  {
    id: 'PROOF-004',
    program: 'ECDSA_verify(msg, sig, pubKey)',
    input: 'message="Hello, ZK"',
    output: 'valid',
    verificationTime: 89,
    proofSize: '8.7 KB',
    isValid: true,
    verifier: 'zk-EVM',
  },
];

const verifications: Verification[] = [
  {
    id: 'VER-001',
    program: 'add(5, 7)',
    proof: '0x7c8f...3d2a',
    isValid: true,
    verificationTime: 15,
  },
  {
    id: 'VER-002',
    program: 'pow(2, 10)',
    proof: '0x5e9d...1a3c',
    isValid: true,
    verificationTime: 22,
  },
  {
    id: 'VER-003',
    program: 'erc20_balance',
    proof: '0x3f2a...8b7d',
    isValid: false,
    verificationTime: 38,
  },
];

export default function Home() {
  const [selectedProof, setSelectedProof] = useState<Proof | null>(null);
  const [verifying, setVerifying] = useState(false);

  const handleVerify = async () => {
    setVerifying(true);
    await new Promise(r => setTimeout(r, 2000));
    setVerifying(false);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-violet-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">zkVM Simulator</h1>
          <p className="text-gray-400 mt-2">Zero-Knowledge Virtual Machine proofs</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-violet-400 p-4 text-center">
            <div className="text-3xl font-black text-violet-400">100%</div>
            <div className="text-sm text-gray-400">Correctness</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">2-3s</div>
            <div className="text-sm text-gray-400">Avg Verify</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">150x</div>
            <div className="text-sm text-gray-400">Proof Size</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">4</div>
            <div className="text-sm text-gray-400">Prover Types</div>
          </div>
        </section>

        {/* Proofs Grid */}
        <section className="grid md:grid-cols-2 gap-4">
          {proofs.map((proof) => (
            <div
              key={proof.id}
              onClick={() => setSelectedProof(proof)}
              className={`bg-gray-900 border-4 cursor-pointer transition-all hover:border-violet-400 ${
                selectedProof?.id === proof.id ? 'border-violet-400 bg-violet-900/20' : 'border-gray-700'
              }`}
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 text-xs font-bold bg-violet-900/50 text-violet-400">
                    {proof.verifier}
                  </span>
                  <span className={`px-2 py-1 text-xs font-bold ${
                    proof.isValid ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'
                  }`}>
                    {proof.isValid ? '✓ Valid' : '✗ Invalid'}
                  </span>
                </div>
                <h3 className="font-bold text-violet-400 text-sm mb-2">{proof.program}</h3>
                <p className="text-xs text-gray-400 mb-2"><span className="text-gray-500">Input:</span> {proof.input}</p>
                <p className="text-xs text-gray-400 mb-2"><span className="text-gray-500">Output:</span> {proof.output}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Proof size: {proof.proofSize}</span>
                  <span>Verify: {proof.verificationTime}ms</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Selected Proof Details */}
        {selectedProof && (
          <section className="bg-gray-900 border-4 border-violet-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-violet-400">{selectedProof.program}</h2>
                <p className="text-sm text-gray-400">Verifier: {selectedProof.verifier}</p>
              </div>
              <button
                onClick={() => setSelectedProof(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Input</div>
                <div className="font-mono text-sm break-all">{selectedProof.input}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Output</div>
                <div className="font-mono text-sm break-all">{selectedProof.output}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Verification</div>
                <div className={`text-xl font-bold ${selectedProof.isValid ? 'text-green-400' : 'text-red-400'}`}>
                  {selectedProof.isValid ? 'Valid' : 'Invalid'}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Proof Size</div>
                <div className="text-2xl font-bold">{selectedProof.proofSize}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Verification Time</div>
                <div className="text-2xl font-bold">{selectedProof.verificationTime}ms</div>
              </div>
            </div>

            <button
              onClick={handleVerify}
              disabled={verifying}
              className="w-full py-4 bg-violet-500 text-white font-bold border-4 border-violet-400 hover:bg-violet-400 disabled:opacity-50 disabled:cursor-not-allowed text-xl"
            >
              {verifying ? 'Verifying...' : 'Re-verify Proof'}
            </button>
          </section>
        )}

        {/* Verifications */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Recent Verifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left py-3">Program</th>
                  <th className="text-left py-3">Proof</th>
                  <th className="text-right py-3">Status</th>
                  <th className="text-right py-3">Time</th>
                </tr>
              </thead>
              <tbody>
                {verifications.map((v) => (
                  <tr
                    key={v.id}
                    className={`border-b border-gray-800 ${
                      !v.isValid ? 'opacity-50' : ''
                    }`}
                  >
                    <td className="py-3">{v.program}</td>
                    <td className="py-3 font-mono text-xs break-all">{v.proof}</td>
                    <td className="py-3 text-right">
                      <span className={`px-2 py-1 text-xs font-bold ${
                        v.isValid ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'
                      }`}>
                        {v.isValid ? 'Valid' : 'Invalid'}
                      </span>
                    </td>
                    <td className="py-3 text-right">{v.verificationTime}ms</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How zkVM Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How zkVM Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-violet-400 mb-2">Program</h3>
              <p className="text-xs text-gray-400">Write code (EVM, Rust)</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Execute</h3>
              <p className="text-xs text-gray-400">Run with private input</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Generate</h3>
              <p className="text-xs text-gray-400">Create ZK proof</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Verify</h3>
              <p className="text-xs text-gray-400">Anyone can verify</p>
            </div>
          </div>
        </section>

        {/* Prover Types */}
        <section className="bg-gray-900 border-4 border-violet-400 p-6">
          <h2 className="text-xl font-black text-violet-400 mb-4">zkVM Prover Types</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-violet-400 mb-2">zk-SNARK</div>
              <p className="text-sm text-gray-400">
                Succinct Non-interactive ARgument of Knowledge. Small proof size, trusted setup.
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-violet-400 mb-2">zk-STARK</div>
              <p className="text-sm text-gray-400">
                Scalable Transparent ARgument of Knowledge. No trusted setup, larger proof.
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-violet-400 mb-2">zk-EVM</div>
              <p className="text-sm text-gray-400">
                Ethereum virtual machine in zkVM. Prove contract execution.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-violet-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
