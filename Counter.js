console.log('HeyAashu')
let count = 0;

const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');
// console.log(btns);

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
            if(styles.contains('Decrease')) 
            {
                count--;
            }
            else if(styles.contains('Increase'))
            {
                count++
            }
            else
            {
                count=0;
            }

            if(count>1)
            {
                value.style.color = 'blue';
            }
            if(count<1)
            {
                value.style.color = 'red';
            }
            if(count===0)
            {
                value.style.color = 'black';
            }
          value.textContent = count;
        })
})