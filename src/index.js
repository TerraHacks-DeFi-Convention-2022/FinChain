import { MnemonicKey, MsgSend, LCDClient } from "@terra-money/terra.js";

const terra = new LCDClient({
    URL: 'https://localhost:1317',
    chainID: 'columbus-5',
});

const mk = new MnemonicKey({
    mnemonic: "<Enter 24 word mnemonic>",
});

//creating a wallet
const wallet = terra.wallet(mk);

//transaction

//creating a message
const send = new MsgSend(wallet.key.accAddress,
    "some addresss",
    { uluna: 1000 });

//creating and signing a transaction
const tx = await wallet.createAndSignTx({
    msgs: [send],
    memo: "Hello"
});

const txResult = await terra.tx.broadcast(tx);

