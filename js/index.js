// Noakhali Donation Part:


    document.getElementById('btn-donate-1')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donateNoakhali = getInputFieldValueById('donate-noakhali');
        const balanceNoakhali = getTextFieldValueById('balance-noakhali');
        const requiredMoney = getTextFieldValueById('required-money');

        if(isNaN(donateNoakhali) || donateNoakhali < 1){
            alert('Invalid Donation Amount')
            return;
        }
        if(donateNoakhali > 0){
            my_modal_1.showModal();
        }

        const newBalance = balanceNoakhali + donateNoakhali;
        document.getElementById('balance-noakhali').innerText = newBalance;

        const newRequiredMoney = requiredMoney - donateNoakhali;
        document.getElementById('required-money').innerText = newRequiredMoney;

        // added in history
       const div = document.createElement('div');
       div.classList.add('border', 'w-10/12', 'mx-auto', 'py-5', 'px-6');
       div.innerHTML =`
            <p> ${donateNoakhali} Taka is Donated for famine-2024 at Noakhali, Bangladesh </P>
            <p> ${new Date()} </p>
       `
       document.getElementById('history-added').appendChild(div);    
       
    }) 


    //Feni Donation Part:

    document.getElementById('btn-donate-2')
        .addEventListener('click', function(event){
            event.preventDefault();

            const donateFeni = getInputFieldValueById('donate-feni');
            const balanceFeni = getTextFieldValueById('balance-feni');
            const requiredMoney = getTextFieldValueById('required-money');
            

            if(isNaN(donateFeni) || donateFeni < 1){
                alert('Invalid Donation Amount')
                return;
            }
            if(donateFeni > 0){
                my_modal_1.showModal();
            }

            const newBalance = balanceFeni + donateFeni;
            document.getElementById('balance-feni').innerText = newBalance;

            const newRequiredMoney = requiredMoney - donateFeni;
            document.getElementById('required-money').innerText = newRequiredMoney;

             // added in history
            const div = document.createElement('div');
            div.classList.add('border', 'w-10/12', 'mx-auto', 'py-5', 'px-6');
            div.innerHTML =`
                    <p> ${donateFeni} Taka is Donated for famine-2024 at Feni, Bangladesh </P>
                    <p> ${new Date()} </p>
            `
            document.getElementById('history-added').appendChild(div);
            
    })


    // Quota Movement Aid Donation:

    document.getElementById('btn-donate-3')
        .addEventListener('click', function(event){
            event.preventDefault();

            const donation = getInputFieldValueById('donation');
            const balanceQuotaMovementAid = getTextFieldValueById('balance-quota-movement-aid');
            const requiredMoney = getTextFieldValueById('required-money');

            if(isNaN(donation) || donation < 1){
                alert('Invalid Donation Amount')
                return;
            }
            if(donation > 0){
                my_modal_1.showModal();
            }

            const newBalance = balanceQuotaMovementAid + donation;
            document.getElementById('balance-quota-movement-aid').innerText = newBalance;

            const newRequiredMoney = requiredMoney - donation;
            document.getElementById('required-money').innerText = newRequiredMoney;

             // added in history
            const div = document.createElement('div');
            div.classList.add('border', 'w-10/12', 'mx-auto', 'py-5', 'px-6');
            div.innerHTML =`
                    <p> ${donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </P>
                    <p> ${new Date()} </p>
            `
            document.getElementById('history-added').appendChild(div);
    })

