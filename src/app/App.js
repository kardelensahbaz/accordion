import React from 'react'
import './styles.css'
import Accordion from './Accordion';

const questiosAndAnswers = [
    { title: "Ürün kaliteli mi?", content: "Evet, ürünlerimiz yüksek kalite standartlarında üretilmektedir." },
    { title: "Fiyatı ne kadar?", content: "Fiyatlarımız modele ve özelliklere göre değişmektedir." },
    { title: "Ne zaman ulaşır?", content: "Siparişler genellikle 2-3 iş günü içinde teslim edilir." }
  ];

const App = () => {
  
  return (
    <div className="square">
        <h1>Sıkça Sorulan Sorular</h1>
    <div>
      {questiosAndAnswers.map((item,index) => <Accordion key={index} title={item.title} context={item.content}/>)}
    </div>
    </div>
  )
}

export default App
