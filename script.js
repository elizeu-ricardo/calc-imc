const titulo = document.getElementById("titulo")
const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")

document.getElementById("btn").addEventListener("click", function(e) {
    const result = document.getElementById("result").innerHTML = parseFloat(peso.value / (altura.value * altura.value)).toFixed(1)

    setTimeout(() => {
        if(result < 18.5) {

            alert(`Olá ${nome.value}, Seu IMC é ${result}: baixo peso. É recomendado procurar um médico para avaliação criteriosa do resultado. Pode indicar um estado de consumo do organismo, com poucas reservas e riscos associados.`)
        
        }else if(result > 18.5 && result < 24.9) {

            alert(`Olá ${nome.value}, Seu IMC é ${result}: peso adequado. Tudo indica que está tudo bem, mas é importante avaliar outros parâmetros da composição corporal, para compreender se estão dentro do recomendado. Algumas pessoas apresentam IMC dentro da normalidade, mas têm circunferência abdominal maior que a recomendada e/ou quantidade de massa gorda acima do ideal.`)
        
        }else if(result >= 25 && result < 29.9) {

            alert(`Olá ${nome.value}, Seu IMC é ${result}: sobrepeso. O sobrepeso está associado ao risco de doenças como diabetes e hipertensão. Então, atenção! Consulte um médico e reveja hábitos para reverter o quadro. Também é importante avaliar outros parâmetros, como a circunferência abdominal`)
        
        }else if (result > 30.0 && result < 34.9) {

            alert(`Olá ${nome.value}, Seu IMC é ${result}: obesidade grau I. É importante buscar orientação médica e nutricional para entender melhor o seu caso, mesmo que os exames (colesterol e glicemia, por exemplo) estejam normais.`)
        
        }else if(result > 35.0 && result < 39.9){

            alert(`Olá ${nome.value}, Seu IMC é ${result}: obesidade grau II. Indica um quadro de obesidade mais evoluído em relação à classificação anterior e, mesmo com exames laboratoriais dentro da normalidade, não se deve atrasar a busca por orientação médica e nutricional.`)
        
        }else if(result >= 40.0) {

            alert(`Olá ${nome.value}, Seu IMC é ${result}: obesidade grau III. Nesse ponto, a chance de já estarmos diante de outras doenças associadas é mais elevada. É fundamental buscar orientação médica.`)
        
        }else{

            alert("Dados inválido, preenchar os campos e tente novamente")
        }

        nome.value = " ";
        idade.value = " ";
        altura.value = " ";
        peso.value = " ";

      }, 3000)
})