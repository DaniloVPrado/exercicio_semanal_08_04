import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
    const estilo = {
        marginTop: 12,
        paddingTop: '5vh',
        marginBottom: 10,
        backgroundColor: '#e8e7e3',
        border: 'solid',
        width: '100%',
        height: '1000',
        borderRadius: 8,
        textAlign: 'center',
        borderColor: 'black',
        fontWeight: 'bold',
        fontSize: '30px'
    }
    const medicos = {
        medico1: 'Calinhos Menezes',
        medico2: 'Marco Aurelio',
        medico3: 'Pilantra Ramos'
    }
    const imgMedico = require('./images/medic1.jpg');
    return(
        <div style={estilo}>
            Profissionais de saúde
            <div style={{marginTop: 30, borderRadius: 8, color: 'grey', backgroundColor: '#f7f6f2', border: 'solid', margin: 20}}> 
                <div className="teste">
                    <img className='img' src="https://www.medicar.com.br/uploads/pagina/elemento/campo/2019/11/IhG8UnwGEHqSudm5/terceirizacao-ambulatorio-637x373.jpg"/>
                    {medicos.medico1}
                </div>
                <div className="teste">
                    <img className='img' src={imgMedico}/>
                    {medicos.medico2}
                </div>
                <div className="teste">
                    <img className='img' src="https://www.medicar.com.br/uploads/pagina/elemento/campo/2019/11/IhG8UnwGEHqSudm5/terceirizacao-ambulatorio-637x373.jpg"/>
                    {medicos.medico3}
                </div>
                
            </div>
        </div>    

        // <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
        //     <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4}}>{textoDoRotulo}</label>
        //     <input id="nome" type="text" style={{paddingTop: 8, paddingBottom: 8, borderStyle:'hidden', width: '100%', borderRadius: 8, outline: 'none'}}></input>
        //     <button style={estilosBotao}>{obterTextoDoBotao()}</button>
        // </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)


// const required

// import React from 'react'
// import ReactDOM from 'react-dom'
// import './styles.css'

// const App = () => {
//     const estilosBotao = {
//         marginTop: 12,
//         paddingTop: 8,
//         paddingBottom: 8,
//         backgroundColor: 'blueviolet',
//         color: 'white',
//         border: 'none',
//         width: '100%',
//         borderRadius: 8
//     }
//     const textoDoRotulo = 'Nome'
//     const obterTextoDoBotao = () => "Enviar"
//     // const obterTextoDoBotaoComReturn = () => {
//     //     return "Enviar"
//     // }
//     return(
//         <div style={{margin: 'auto', width: 1200, height: 300, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}> Olá 
//             <div className="rotulo">Boa tarde</div>
//             <button style={estilosBotao}>{obterTextoDoBotao()}</button>
//         </div>
        

//         // <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
//         //     <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4}}>{textoDoRotulo}</label>
//         //     <input id="nome" type="text" style={{paddingTop: 8, paddingBottom: 8, borderStyle:'hidden', width: '100%', borderRadius: 8, outline: 'none'}}></input>
//         //     <button style={estilosBotao}>{obterTextoDoBotao()}</button>
//         // </div>
//     )
// }


// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// )

