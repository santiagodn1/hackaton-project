let account

document.getElementById('connect-button').addEventListener('click', event => {
    ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
        account = accounts[0];
        console.log(account);
    });
});

export { account } ;