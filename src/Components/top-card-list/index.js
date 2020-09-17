import React from 'react'
import Card from '../Card'
import './style.css';

const CardListData =
  [
    {
      'id':1,
      'username': '@Johnfra797',
      'followers':20,
      'todayfollowers':10,
      'icon':'images/icon-facebook.svg',
      'name':'facebook'
    },
    { 
      'id':2,
      'username': '@Johnfra797',
      'followers':30,
      'todayfollowers':20,
      'icon':'images/icon-twitter.svg',
      'name':'twitter'
    },
    {
      'id':3,
      'username': '@Johnfra797',
      'followers':40,
      'todayfollowers':30,
      'icon':'images/icon-instagram.svg',
      'name':'instagram'
    },
    {
      'id':4,
      'username': '@Johnfra797',
      'followers':50,
      'todayfollowers':40,
      'icon':'images/icon-youtube.svg',
      'name':'youtube'
    }

  ]

function TopCardList() {
  return (<section className="top-cards">
    <div className="wrapper">
      <div className="grid">
        {
          CardListData.map((cardData)=>

            <Card key={cardData.id} {...cardData}></Card>
          )
        }
        {/* <article className="card twitter">
          <p className="card-title">
            <img src="images/icon-twitter.svg" alt=""/>
            @LeonidasEsteban
          </p>
          <p className="card-followers">
            <span className="card-followers-number">28k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article>
        <article className="card instagram">
          <p className="card-title">
            <img src="images/icon-instagram.svg" alt=""/>
            @LeonidasEsteban
          </p>
          <p className="card-followers">
            <span className="card-followers-number">6k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article>
        <article className="card youtube">
          <p className="card-title">
            <img src="images/icon-youtube.svg" alt=""/>
            @LeonidasEsteban
          </p>
          <p className="card-followers">
            <span className="card-followers-number">12k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article> */}
      </div>
    </div>
  </section>);
}

export default TopCardList;