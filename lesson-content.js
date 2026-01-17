// Lesson Content and Resources from Blockchain Academy Links
// Based on provided resources: Binance Academy, Base, Optimism, Ethereum, Bitcoin, Arbitrum, etc.

const LESSON_CONTENT = {
    // Beginner Path Content
    '1-1': {
        title: 'What is Blockchain?',
        story: `
            <div class="story-paragraph">
                <p>Blockchain is a distributed ledger technology that maintains a continuously growing list of records, called blocks, which are linked and secured using cryptography.</p>
                <p>Each block typically contains a cryptographic hash of the previous block, a timestamp, and transaction data. By design, a blockchain is resistant to modification of its data.</p>
            </div>
            <div class="story-paragraph">
                <h3>Key Concepts</h3>
                <ul>
                    <li><strong>Decentralization:</strong> No central authority controls the blockchain</li>
                    <li><strong>Immutability:</strong> Once data is recorded, it cannot be altered</li>
                    <li><strong>Transparency:</strong> All participants can view the transaction history</li>
                    <li><strong>Security:</strong> Cryptographic hashing ensures data integrity</li>
                </ul>
            </div>
        `,
        resources: [
            {
                title: 'Bitcoin.org - How it Works',
                url: 'https://bitcoin.org/en/how-it-works',
                description: 'Learn the fundamentals of how Bitcoin and blockchain technology work',
                source: 'Bitcoin.org'
            },
            {
                title: 'Binance Academy - What is Blockchain?',
                url: 'https://academy.binance.com/en/articles/what-is-blockchain',
                description: 'Comprehensive guide to blockchain technology from Binance Academy',
                source: 'Binance Academy'
            },
            {
                title: 'Ethereum.org - What is Ethereum?',
                url: 'https://ethereum.org/en/what-is-ethereum/',
                description: 'Understanding Ethereum and its role in the blockchain ecosystem',
                source: 'Ethereum Foundation'
            }
        ],
        quiz: [
            {
                question: 'What is the primary characteristic of blockchain that prevents data tampering?',
                options: ['Decentralization', 'Immutability', 'Transparency', 'Speed'],
                correct: 1,
                explanation: 'Immutability means once data is recorded in a block, it cannot be altered without invalidating all subsequent blocks, making the blockchain resistant to tampering.'
            },
            {
                question: 'What links each block to the previous one in a blockchain?',
                options: ['A timestamp', 'A cryptographic hash', 'A transaction ID', 'A random number'],
                correct: 1,
                explanation: 'Each block contains a cryptographic hash of the previous block, creating a chain that links all blocks together.'
            }
        ]
    },
    '1-2': {
        title: 'Distributed Ledgers Explained',
        story: `
            <div class="story-paragraph">
                <p>A distributed ledger is a database that is consensually shared and synchronized across multiple sites, institutions, or geographies.</p>
                <p>Unlike traditional centralized databases, distributed ledgers have no central data store or administration functionality.</p>
            </div>
            <div class="story-paragraph">
                <h3>Benefits of Distributed Ledgers</h3>
                <ul>
                    <li>Increased transparency and auditability</li>
                    <li>Reduced costs by eliminating middlemen</li>
                    <li>Enhanced security through decentralization</li>
                    <li>Faster transaction processing</li>
                </ul>
            </div>
        `,
        resources: [
            {
                title: 'Base Learn - Welcome Guide',
                url: 'https://docs.base.org/learn/welcome',
                description: 'Learn about Base and Layer 2 blockchain technology',
                source: 'Base'
            },
            {
                title: 'Arbitrum Learn - Overview',
                url: 'https://portal.arbitrum.io/learn',
                description: 'Introduction to Arbitrum and Layer 2 scaling solutions',
                source: 'Arbitrum'
            }
        ],
        quiz: [
            {
                question: 'What is the main difference between a centralized and distributed ledger?',
                options: ['Distributed ledgers are faster', 'Distributed ledgers have no central authority', 'Centralized ledgers are more secure', 'There is no difference'],
                correct: 1,
                explanation: 'Distributed ledgers operate without a central authority, with data shared and synchronized across multiple nodes in the network.'
            }
        ]
    },
    '2-1': {
        title: 'Bitcoin Whitepaper Overview',
        story: `
            <div class="story-paragraph">
                <p>The Bitcoin whitepaper, titled "Bitcoin: A Peer-to-Peer Electronic Cash System," was published by Satoshi Nakamoto in 2008.</p>
                <p>It introduced the first successful implementation of blockchain technology and solved the double-spending problem without requiring a trusted authority.</p>
            </div>
            <div class="story-paragraph">
                <h3>Key Innovations</h3>
                <ul>
                    <li>Proof of Work consensus mechanism</li>
                    <li>Merkle trees for efficient verification</li>
                    <li>UTXO (Unspent Transaction Output) model</li>
                    <li>Cryptographic proof instead of trust</li>
                </ul>
            </div>
        `,
        resources: [
            {
                title: 'Bitcoin Developer Guide',
                url: 'https://developer.bitcoin.org/',
                description: 'Complete developer documentation for Bitcoin',
                source: 'Bitcoin.org'
            },
            {
                title: 'Binance Academy - Bitcoin',
                url: 'https://academy.binance.com/en/articles/what-is-bitcoin',
                description: 'Learn about Bitcoin, the first cryptocurrency',
                source: 'Binance Academy'
            }
        ],
        quiz: [
            {
                question: 'Who published the Bitcoin whitepaper?',
                options: ['Vitalik Buterin', 'Satoshi Nakamoto', 'Charlie Lee', 'Brian Armstrong'],
                correct: 1,
                explanation: 'Satoshi Nakamoto published the Bitcoin whitepaper in 2008, introducing the world\'s first cryptocurrency.'
            },
            {
                question: 'What problem did Bitcoin solve?',
                options: ['Slow transactions', 'Double-spending', 'High fees', 'Lack of privacy'],
                correct: 1,
                explanation: 'Bitcoin solved the double-spending problem without requiring a trusted central authority, enabling peer-to-peer digital cash.'
            }
        ]
    },
    '4-1': {
        title: 'What is Ethereum?',
        story: `
            <div class="story-paragraph">
                <p>Ethereum is a decentralized platform that enables smart contracts and decentralized applications (dApps) to be built and run without any downtime, fraud, control, or interference from a third party.</p>
                <p>It features its own cryptocurrency, Ether (ETH), which is used to power applications on the network.</p>
            </div>
            <div class="story-paragraph">
                <h3>Ethereum Capabilities</h3>
                <ul>
                    <li>Smart contract execution</li>
                    <li>Decentralized application hosting</li>
                    <li>Token creation (ERC-20, ERC-721, etc.)</li>
                    <li>Decentralized finance (DeFi) applications</li>
                </ul>
            </div>
        `,
        resources: [
            {
                title: 'Ethereum Developers Portal',
                url: 'https://ethereum.org/en/developers/',
                description: 'Comprehensive guides for Ethereum developers',
                source: 'Ethereum Foundation'
            },
            {
                title: 'Binance Academy - Ethereum',
                url: 'https://academy.binance.com/en/articles/what-is-ethereum',
                description: 'Learn about Ethereum and smart contracts',
                source: 'Binance Academy'
            }
        ],
        quiz: [
            {
                question: 'What makes Ethereum different from Bitcoin?',
                options: ['It has lower fees', 'It supports smart contracts and dApps', 'It is faster', 'It has more coins'],
                correct: 1,
                explanation: 'Ethereum was designed as a programmable blockchain, enabling developers to build and deploy smart contracts and decentralized applications, unlike Bitcoin which is primarily a digital currency.'
            },
            {
                question: 'What is the native cryptocurrency of Ethereum?',
                options: ['Bitcoin', 'Ether (ETH)', 'Ethereum Token', 'ETH Coin'],
                correct: 1,
                explanation: 'Ether (ETH) is the native cryptocurrency of the Ethereum network, used to pay for transaction fees and computational services.'
            }
        ]
    },
    '5-2': {
        title: 'Base: Coinbase\'s L2',
        story: `
            <div class="story-paragraph">
                <p>Base is an Ethereum Layer 2 (L2) solution built by Coinbase that aims to bring the next billion users on-chain.</p>
                <p>It's designed to be secure, low-cost, and developer-friendly, using Optimism's OP Stack technology.</p>
            </div>
            <div class="story-paragraph">
                <h3>Base Features</h3>
                <ul>
                    <li>Built on Optimism's OP Stack</li>
                    <li>Low transaction fees</li>
                    <li>Ethereum security</li>
                    <li>Easy fiat on-ramps via Coinbase</li>
                </ul>
            </div>
        `,
        resources: [
            {
                title: 'Base Official Documentation',
                url: 'https://docs.base.org/',
                description: 'Complete documentation for Base blockchain',
                source: 'Base'
            },
            {
                title: 'Base Learn Guide',
                url: 'https://docs.base.org/learn/welcome',
                description: 'Learn how to build on Base',
                source: 'Base'
            }
        ],
        quiz: [
            {
                question: 'What technology does Base use?',
                options: ['Arbitrum Nitro', 'OP Stack', 'Polygon SDK', 'ZK-Rollups'],
                correct: 1,
                explanation: 'Base is built using Optimism\'s OP Stack technology, which provides a secure and scalable Layer 2 solution.'
            }
        ]
    },
    '5-3': {
        title: 'Optimism: Optimistic Rollups',
        story: `
            <div class="story-paragraph">
                <p>Optimism is an Ethereum Layer 2 scaling solution that uses optimistic rollups to achieve faster and cheaper transactions.</p>
                <p>It processes transactions off-chain and posts compressed data back to Ethereum, reducing costs while maintaining security.</p>
            </div>
            <div class="story-paragraph">
                <h3>How Optimistic Rollups Work</h3>
                <ul>
                    <li>Transactions are executed off-chain</li>
                    <li>State changes are posted to Ethereum</li>
                    <li>Fraud proofs ensure security</li>
                    <li>7-day challenge period for disputes</li>
                </ul>
            </div>
        `,
        resources: [
            {
                title: 'Optimism Developers Docs',
                url: 'https://www.optimism.io/developers/docs/',
                description: 'Developer documentation for Optimism',
                source: 'Optimism'
            },
            {
                title: 'Optimistic Academy',
                url: 'https://app.optimistic.academy/',
                description: 'Learn about Optimism and optimistic rollups',
                source: 'Optimism'
            }
        ],
        quiz: [
            {
                question: 'What is the challenge period for Optimism transactions?',
                options: ['1 day', '7 days', '14 days', '30 days'],
                correct: 1,
                explanation: 'Optimism uses a 7-day challenge period where anyone can dispute fraudulent transactions through fraud proofs.'
            }
        ]
    },
    '5-4': {
        title: 'Arbitrum: Advanced Optimistic Rollups',
        story: `
            <div class="story-paragraph">
                <p>Arbitrum is a leading Ethereum Layer 2 scaling solution that uses optimistic rollups with unique fraud-proof mechanisms.</p>
                <p>It offers low transaction costs while maintaining Ethereum's security and compatibility with existing Ethereum tools.</p>
            </div>
            <div class="story-paragraph">
                <h3>Arbitrum Advantages</h3>
                <ul>
                    <li>Lower transaction fees</li>
                    <li>Faster transaction processing</li>
                    <li>Full Ethereum compatibility</li>
                    <li>Multi-round fraud proofs</li>
                </ul>
            </div>
        `,
        resources: [
            {
                title: 'Arbitrum Get Started Guide',
                url: 'https://docs.arbitrum.io/get-started/overview',
                description: 'Get started with Arbitrum development',
                source: 'Arbitrum'
            },
            {
                title: 'Arbitrum Learn Portal',
                url: 'https://portal.arbitrum.io/learn',
                description: 'Learn about Arbitrum and Layer 2 scaling',
                source: 'Arbitrum'
            },
            {
                title: 'Binance Academy - Layer 2',
                url: 'https://academy.binance.com/en/articles/what-are-layer-2-scaling-solutions',
                description: 'Understanding Layer 2 scaling solutions',
                source: 'Binance Academy'
            }
        ],
        quiz: [
            {
                question: 'What is Arbitrum\'s main advantage over Ethereum mainnet?',
                options: ['Higher security', 'Lower transaction fees', 'More tokens', 'Different consensus'],
                correct: 1,
                explanation: 'Arbitrum provides significantly lower transaction fees compared to Ethereum mainnet while maintaining security through optimistic rollups.'
            }
        ]
    },
    // Intermediate Path Content
    '6-1': {
        title: 'Introduction to DeFi',
        story: `
            <div class="story-paragraph">
                <p>Decentralized Finance (DeFi) is a financial system built on blockchain networks that enables financial services without intermediaries.</p>
                <p>DeFi applications use smart contracts to automate financial operations, making them transparent, accessible, and programmable.</p>
            </div>
            <div class="story-paragraph">
                <h3>DeFi Categories</h3>
                <ul>
                    <li>Decentralized Exchanges (DEXs)</li>
                    <li>Lending and Borrowing Protocols</li>
                    <li>Yield Farming</li>
                    <li>Stablecoins</li>
                    <li>Derivatives</li>
                </ul>
            </div>
        `,
        resources: [
            {
                title: 'Binance Academy - DeFi',
                url: 'https://academy.binance.com/en/articles/what-is-defi',
                description: 'Complete guide to Decentralized Finance',
                source: 'Binance Academy'
            },
            {
                title: 'Ethereum DeFi Resources',
                url: 'https://ethereum.org/en/defi/',
                description: 'Learn about DeFi on Ethereum',
                source: 'Ethereum Foundation'
            }
        ],
        quiz: [
            {
                question: 'What technology powers DeFi applications?',
                options: ['Traditional banking systems', 'Smart contracts', 'Centralized exchanges', 'Credit cards'],
                correct: 1,
                explanation: 'DeFi applications are powered by smart contracts, which are self-executing contracts with terms written in code.'
            }
        ]
    },
    '7-1': {
        title: 'Solidity Basics and Syntax',
        story: `
            <div class="story-paragraph">
                <p>Solidity is an object-oriented programming language designed for implementing smart contracts on the Ethereum blockchain.</p>
                <p>It's statically typed, supports inheritance, libraries, and complex user-defined types.</p>
            </div>
            <div class="story-paragraph">
                <h3>Solidity Features</h3>
                <ul>
                    <li>Contract-oriented language</li>
                    <li>Static typing</li>
                    <li>Inheritance support</li>
                    <li>Library support</li>
                    <li>Complex user-defined types</li>
                </ul>
            </div>
        `,
        resources: [
            {
                title: 'Ethereum Developers - Solidity',
                url: 'https://ethereum.org/en/developers/docs/smart-contracts/',
                description: 'Learn Solidity and smart contract development',
                source: 'Ethereum Foundation'
            },
            {
                title: 'Binance Academy - Smart Contracts',
                url: 'https://academy.binance.com/en/articles/what-are-smart-contracts',
                description: 'Understanding smart contracts',
                source: 'Binance Academy'
            }
        ],
        quiz: [
            {
                question: 'What is Solidity primarily used for?',
                options: ['Web development', 'Smart contract development', 'Mobile apps', 'Data analysis'],
                correct: 1,
                explanation: 'Solidity is specifically designed for writing smart contracts on the Ethereum blockchain.'
            }
        ]
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.LESSON_CONTENT = LESSON_CONTENT;
}

