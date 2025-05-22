const addHistory = document.getElementById('historySection');
const realTime = new Date();
document.getElementById('donateBtnNoakhali').addEventListener('click', function(){
    const moneyAdded = getValueById('donateNoakhali');
    const title = document.getElementById('titleNoakhali').innerText;
    const noakhaliBalance = document.getElementById('noakhaliBalance').innerText;
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceNum = parseFloat(mainBalance);
    const balanceNum = parseFloat(noakhaliBalance);
    if(isNaN(moneyAdded) == true || moneyAdded <= 0){
        alert('not a valid amount')
    }else if(mainBalanceNum - moneyAdded >= 0){
        console.log(moneyAdded)
       const newBalance = moneyAdded + balanceNum;
    const newMainBalance = mainBalanceNum - moneyAdded;
    document.getElementById('noakhaliBalance').innerText = newBalance;
    document.getElementById('main-balance').innerText = newMainBalance;
    window.showModal(); // Show modal on successful donation
    const addinfo = document.createElement('div');
    addinfo.innerHTML = `
            <div class="card card-border bg-base-100 w-full shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">${moneyAdded} Taka is Donated for famine-2024 at ${title}</h2>
                    <p>${realTime}</p>
                </div>
            </div>
    `;
    addHistory.appendChild(addinfo);
    }else{
        alert("Can't donale more than main balance")
    }
    
});
document.getElementById('donateBtnFeni').addEventListener('click', function(){
    const moneyAdded = getValueById('donateFeni');
    const title = document.getElementById('titleFeni').innerText;
    const feniBalance = document.getElementById('feniBalance').innerText;
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceNum = parseFloat(mainBalance);
    const balanceNum = parseFloat(feniBalance);
    if(isNaN(moneyAdded) == true || moneyAdded <= 0){
        alert('not a valid amount')
    }else if(mainBalanceNum - moneyAdded >= 0){
        console.log(moneyAdded)
       const newBalance = moneyAdded + balanceNum;
    const newMainBalance = mainBalanceNum - moneyAdded;
    document.getElementById('feniBalance').innerText = newBalance;
    document.getElementById('main-balance').innerText = newMainBalance;
    window.showModal(); // Show modal on successful donation
    const addinfo = document.createElement('div');
    addinfo.innerHTML = `
            <div class="card card-border bg-base-100 w-full shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">${moneyAdded} Taka is Donated for famine-2024 at ${title}</h2>
                    <p>${realTime}</p>
                </div>
            </div>
    `;
    addHistory.appendChild(addinfo);
    }else{
        alert("Can't donale more than main balance")
    }
    
});
document.getElementById('donateBtnQuota').addEventListener('click', function(){
    const moneyAdded = getValueById('donateQuota');
    const title = document.getElementById('titleQuota').innerText;
    const quotaBalance = document.getElementById('quotaBalance').innerText;
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceNum = parseFloat(mainBalance);
    const balanceNum = parseFloat(quotaBalance);
    if(isNaN(moneyAdded) == true || moneyAdded <= 0){
        alert('not a valid amount')
    }else if(mainBalanceNum - moneyAdded >= 0){
        console.log(moneyAdded)
       const newBalance = moneyAdded + balanceNum;
    const newMainBalance = mainBalanceNum - moneyAdded;
    document.getElementById('quotaBalance').innerText = newBalance;
    document.getElementById('main-balance').innerText = newMainBalance;
    
    window.showModal(); // Show modal on successful donation
    const addinfo = document.createElement('div');
    addinfo.innerHTML = `
            <div class="card card-border bg-base-100 w-full shadow-sm">
                <div class="card-body">
                    <h2 class="card-title">${moneyAdded} Taka is Donated for famine-2024 at ${title}</h2>
                    <p>${realTime}</p>
                </div>
            </div>
    `;
    addHistory.appendChild(addinfo);
    }else{
        alert("Can't donale more than main balance")
    }
    
});