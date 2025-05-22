document.getElementById('switchDonate').addEventListener('click', function(){
    document.getElementById('historySection').classList.add('hidden');
    document.getElementById('switchDonate').classList.add('bg-lime-300');
    document.getElementById('switchHistory').classList.remove('bg-lime-300');
    document.getElementById('donateSection').classList.remove('hidden');
})
document.getElementById('switchHistory').addEventListener('click', function(){
    document.getElementById('switchDonate').classList.remove('bg-lime-300');
    document.getElementById('switchHistory').classList.add('bg-lime-300');
    document.getElementById('historySection').classList.remove('hidden');
    document.getElementById('donateSection').classList.add('hidden');
})