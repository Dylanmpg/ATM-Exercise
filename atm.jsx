const ATMDeposit = ({ onChange, transactionType }) => {
    if (transactionType) {
      return (
        <div className='container text-center w-75'>
          <label className='label my-3 fs-3' htmlFor='deposit'>
            {transactionType}: <br />
          </label>
          <div className='input-group'>
            <input
              type='number'
              onChange={onChange}
              className='form-control'
              id='transaction-amount'
              step='1'
              min='0'
              placeholder='Withdrawal/Deposit Amount'
            ></input>
            <input type='submit' value='Submit' className='btn btn-success'></input>
          </div>
        </div>
      );
    }
  };
  
  const TransactionType = ({ onClick }) => {
    return (
      <div className='container text-center'>
        <button
          type='button'
          className='btn btn-primary btn-lg px-4'
          onClick={onClick}
          value='Withdraw'
          id='withdraw'
        >Withdrawal</button>
        <br />
        <br />
        <button
          type='button'
          className='btn btn-primary btn-lg px-4'
          onClick={onClick}
          value='Deposit'
          id='deposit'
        >Deposit</button>
        <br />
      </div>
    );
  };
  
  const ATM = () => {
    const [accountTotal, setAccountTotal] = React.useState(0);
    const [transactionAmount, setTransactionAmount] = React.useState(0);
    const [transactionType, setTransactionType] = React.useState('');
        console.log('Account Rendered');
        console.log(transactionType);
        console.log(accountTotal);

    const handleChange = (e) => {
      console.log(`handleChange ${e.target.value}`);
      console.log(transactionAmount);
      setTransactionAmount(Number(e.target.value));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      transactionAmount === 0
        ? alert(`Input a value.`)
        : alert(`Transaction Submitted: ${transactionType} $${transactionAmount}`);
      // Check There Are Funds To Withdraw
      if (
        transactionType === 'Withdraw' &&
        accountTotal - transactionAmount < 0
      ) {
        alert(`Insufficient Funds`);
        return;
      }
      if (
        transactionType === 'Withdraw' &&
        accountTotal - transactionAmount >= 0
      ) {
        setAccountTotal(Number(accountTotal) - Number(transactionAmount));
        return;
      }
        setAccountTotal(Number(accountTotal) + Number(transactionAmount));
    };
  
    const handleTransactionType = (e) => {
      setTransactionType(e.target.value);
    };
  
    return (
      <form onSubmit={handleSubmit} className='container'>
        <div className='row'>
          <h2 className='text-center p-3 m-2'>Balance: $ {accountTotal}</h2>
        </div>
        <h3 className='text-center mt-5 mb-3'>Choose Transaction Type:</h3>
        <TransactionType onClick={handleTransactionType} />
        <ATMDeposit
          onChange={handleChange}
          transactionType={transactionType}
        ></ATMDeposit>
      </form>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ATM />);