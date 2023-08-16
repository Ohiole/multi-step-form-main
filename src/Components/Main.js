import React, { useState } from 'react';
import DesktopBar from '../assets/images/bg-sidebar-desktop.svg';
import MobileBar from '../assets/images/bg-sidebar-mobile.svg';
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';
import ThankYouIcon from '../assets/images/icon-thank-you.svg';


function Main() {
  const [changeNum, setChangeNum] = useState(0);
  const [changeScreen, setChangeScreen] = useState(0);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [border, setBorder] = useState('inputBox')
  const [error, setError] = useState(false);
  const [clickedCard, setClickedCard] = useState(false);
  const [clickedCardOne, setClickedCardOne] = useState(false);
  const [clickedCardTwo, setClickedCardTwo] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [inputChecked, setInputChecked] = useState(false);
  const [inputCheckedOne, setInputCheckedOne] = useState(false);
  const [inputCheckedTwo, setInputCheckedTwo] = useState(false);
  const [plansPrice, setPlansPrice] = useState(0);
  const [onlineAddOn, setOnlineAddOn] = useState(1);
  const [largeStorage, setLargeStorage] = useState(2);
  const [customProfile, setCustomProfile] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName ===  ''|| email === '' || phone === '') {
        setError(true);
        setBorder('inputBox errorInp')
    }
    if (fullName && email && phone) {
      setChangeScreen(prevCount => prevCount + 1);
    }
    if (changeNum === 0) {
      setChangeNum(1)
    }
  }

  const changeCards = () => {
    if (clickedCard) {
      setClickedCardOne(false)
      setClickedCardTwo(false)
    } 
    if (clickedCardOne) {
      setClickedCard(false)
      setClickedCardTwo(false)
    }
    if (clickedCardTwo) {
      setClickedCard(false)
      setClickedCardOne(false)
    }
  }

  const clickBack = () => {
    setChangeScreen(prevCount => prevCount - 1)
  }

  const clickCard = () => {
    setClickedCard(!clickedCard);
    changeCards();
  }

  const clickCardOne = () => {
    setClickedCardOne(!clickedCardOne);
    changeCards();
  }

  const clickCardTwo = () => {
    setClickedCardTwo(!clickedCardTwo);
    changeCards();
  }

  const changeToyear = () => {
    setToggleBtn(!toggleBtn);
  }

  const afterSelectPlan = () => {
    if (clickedCard || clickedCardOne || clickedCardTwo) {
      setChangeScreen(2);
    } else {
      setChangeScreen(1);
      alert('Please pick a plan')
    }

    if (toggleBtn) {
      setOnlineAddOn(10)
      setLargeStorage(20)
      setCustomProfile(20)
    } else{
      setOnlineAddOn(1)
      setLargeStorage(2)
      setCustomProfile(2)
    }
  }

  const pickingAddOn = () => {
    setInputChecked(!inputChecked)
  }

  const pickingAddOne = () => {
    setInputCheckedOne(!inputCheckedOne)
  }

  const pickingAddTwo = () => {
    setInputCheckedTwo(!inputCheckedTwo)
  }
 
  const afterPickingAddOns = () => {
    setChangeScreen(3)
    plansTotal();
  }

  const changeFromSummary = () => {
    setChangeScreen(1)
  }

  const plansTotal = () => {
    if (clickedCard && toggleBtn) {
      setPlansPrice(90)
    } else if (clickedCard) {
      setPlansPrice(9)
    }
    if (clickedCardOne && toggleBtn) {
      setPlansPrice(120)
    } else if (clickedCardOne) {
      setPlansPrice(12)
    }
    if (clickedCardTwo && toggleBtn) {
      setPlansPrice(150)
    } else if (clickedCardTwo) {
      setPlansPrice(15)
    }
  }

  const summaryToThankYou = () => {
    setChangeScreen(4)
  }

  return (
    <main>
      <div className='sidebar'>
        <img src={ DesktopBar } alt='Desktop Bar' className='desktop'/>
        <img src={ MobileBar } alt='Mobile Bar' className='mobile' />
        <div className="navNum">
            <div className="eachNum">
              <p className={changeScreen === 0 ?'boldNum active': 'boldNum'}>1</p>
              <div className="stepAndName">
                <p className="step">STEP 1</p>
                <p className="stepName">YOUR INFO</p>
              </div>
            </div>
            <div className="eachNum">
              <p className={changeScreen === 1 ? 'boldNum active' : 'boldNum'}>2</p>
              <div className="stepAndName">
                <p className="step">STEP 2</p>
                <p className="stepName">SELECT PLAN</p>
              </div>
            </div>
            <div className="eachNum">
              <p className={changeScreen === 2 ? 'boldNum active' : 'boldNum'}>3</p>
              <div className="stepAndName">
                <p className="step">STEP 3</p>
                <p className="stepName">ADD-ONS</p>
              </div>
            </div>
            <div className="eachNum">
              <p className={changeScreen === 3 || changeScreen === 4  ? 'boldNum active' : 'boldNum'}>4</p>
              <div className="stepAndName">
                <p className="step">STEP 4</p>
                <p className="stepName">SUMMARY</p>
              </div>
            </div>
        </div>
      </div>
      <div className='form'>
        <div className={changeScreen === 0 ? 'personalInfo' : 'personalInfo active'}>
        <header>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </header>
        <div className="personalInputs">
          <div className="inputs">
            <label>Name {error && (fullName === '') ? <span>This field is required</span>: ''}</label>
            <input type="text" placeholder="e.g. Stephen King" className={(fullName === '') && border} name='name' onChange={e => setFullName(e.target.value)} />
          </div>
          <div className="inputs">
            <label>E-mail Address {error && (email === '') ? <span>This field is required</span>: ''}</label>
            <input type="text" placeholder="e.g. stephenking@lorem.com" className={(email === '') && border} name='email'
            onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="inputs">
            <label>Phone number {error && (phone === '') ? <span>This field is required</span>: ''}</label>
            <input type="text" placeholder="e.g. +1 234 567 890" className={(phone === '') && border} name='number' onChange={e => setPhone(e.target.value)}/>
          </div>
        </div>
        <div className="nextBtn">
          <button onClick={handleSubmit}>Next Step</button>
        </div>
        </div> 
        <div className={changeScreen === 1 ? 'selectPlan active' : 'selectPlan' }>
          <header>
            <h1>Select your Plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </header>
          <div className="cardsAndToggle">
            <div className="cards">
              <div className={clickedCard ? 'card active' : 'card'} onClick={clickCard}>
                <img src={Arcade} alt="Arcade svg" />
                <div className="text">
                  <h2>Arcade</h2>
                  <p className="arcade">{toggleBtn ? '$'+ 90 + '/yr' : '$'+ 9 + '/mo' }</p>
                  <p className={toggleBtn ? 'extraText active' : 'extraText'}>2 months free</p>
                </div>
              </div>
              <div className={clickedCardOne ? 'card active' : 'card'} onClick={clickCardOne}>
                <img src={Advanced} alt="Advanced svg" />
                <div className="text">
                  <h2>Advanced</h2>
                  <p className="advanced">{toggleBtn ? '$'+ 120 + '/yr' : '$'+ 12 + '/mo' }</p>
                  <p className={toggleBtn ? 'extraText active' : 'extraText'}>2 months free</p>
                </div>
              </div>
              <div className={clickedCardTwo ? 'card active' : 'card'} onClick={clickCardTwo}>
                <img src={Pro} alt="Pro svg" />
                <div className="text">
                  <h2>Pro</h2>
                  <p className="pro">{toggleBtn ? '$'+ 150 + '/yr' : '$'+ 15 + '/mo' }</p>
                  <p className={toggleBtn ? 'extraText active' : 'extraText'}>2 months free</p>
                </div>
              </div>
            </div>
            <div className="toggleBtn">
              <p className={toggleBtn ? '' :"active"}>Monthly</p>
              <div className="switch">
                <input type="checkbox" className="toggleBtnCheck" onClick={changeToyear}/>
                <span className="slider"></span>
              </div>
              <p className={toggleBtn ? 'active' :""}>Yearly</p>
            </div>
          </div>
          <div className="selectBtns">
            <p onClick={clickBack}>Go back</p>
            <button onClick={afterSelectPlan}>Next Step</button>
          </div>
        </div>
        <div className={changeScreen === 2 ? 'pickAddOns active':"pickAddOns"}>
          <header>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
          </header>
        <div className="checkboxes">
          <div className={inputChecked ? "checkbox clicked" : 'checkbox'}>
            <div className="textAndInp">
              <input type="checkbox" className="clickCheck" onClick={pickingAddOn}/>
              <div className="text">
                <h3>Online Service</h3>
                <p>Access to multiplayer games</p>
              </div>
            </div>
            <p className="addonAmount">{toggleBtn ? '+$' + onlineAddOn + '/yr' : '+$' + onlineAddOn + '/mo'}</p>
          </div>
          <div className={inputCheckedOne ? "checkbox clicked" : 'checkbox'}>
            <div className="textAndInp">
              <input type="checkbox" className="clickCheck" onClick={pickingAddOne}/>
              <div className="text">
                <h3>Large Storage</h3>
                <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="addonAmount">{toggleBtn ? '+$' + largeStorage + '/yr' : '+$' + largeStorage + '/mo'}</p>
          </div>
          <div className={inputCheckedTwo ? "checkbox clicked" : 'checkbox'}>
            <div className="textAndInp">
              <input type="checkbox" className="clickCheck" onClick={pickingAddTwo}/>
              <div className="text">
                <h3>Customizable profile</h3>
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <p className="addonAmount">{toggleBtn ? '+$' + customProfile + '/yr' : '+$' + customProfile + '/mo'}</p>
          </div>
        </div>
        <div className="selectBtns">
          <p onClick={clickBack}>Go back</p>
          <button onClick={afterPickingAddOns}>Next Step</button>
        </div>
        </div>
        <div className={changeScreen === 3 ? 'finishing active':"finishing"}>
          <header>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
          </header>
        <div className="summary">
          <div className="mainBox">
            <div className="topHead">
              <div className="leftTop">
                <div className="heading">
                  <h4>{clickedCard ? 'Arcade' :
                  clickedCardOne ? 'Advanced' :
                  clickCardTwo ? 'Pro' : ''}</h4><span className="summaryTime">{toggleBtn ? '(Yearly)' : '(Monthly)'}</span>
                </div>
                <p className="changeToSelect"
                onClick={changeFromSummary}>Change</p>
              </div>
              <div className="divPrice">
                <p className="priceIndex monthlyPlan">$<span className="planPrice">{
                   plansPrice
                }</span>{toggleBtn ? '/yr' : '/mo'}</p>
              </div>
            </div>
            <div className="mainBody">
              {inputChecked && <div className='line'>
                <p className='addOnTag'>Online Service</p>
                <p className='priceAdd'>{toggleBtn ? '+$' + 10 + '/yr' : '+$' + 1 + '/mo'}</p>
              </div>}
              {inputCheckedOne && <div className='line'>
                <p className='addOnTag'>Large Storage</p>
                <p className='priceAdd'>{toggleBtn ? '+$' + 20 + '/yr' : '+$' + 2 + '/mo'}</p>
              </div>}
              {inputCheckedTwo && <div className='line'>
                <p className='addOnTag'>Customizable profile</p>
                <p className='priceAdd'>{toggleBtn ? '+$' + 20 + '/yr' : '+$' + 2 + '/mo'}</p>
              </div>}
            </div>
          </div>
          <div className="total">
            <p className="totalText">Total<span className="summaryTime">{toggleBtn ? '(per year)' : '(per month)'}</span></p>
            <p className="finishedCost">+${inputChecked && !inputCheckedOne && !inputCheckedTwo ? (plansPrice + onlineAddOn) : inputCheckedOne && !inputChecked && !inputCheckedTwo ? (plansPrice + largeStorage) : inputCheckedTwo && !inputChecked && !inputCheckedOne ? (plansPrice + customProfile): inputChecked && inputCheckedOne && !inputCheckedTwo ? (plansPrice + largeStorage + onlineAddOn) :  inputChecked && !inputCheckedOne && inputCheckedTwo ? (plansPrice + customProfile + onlineAddOn) :  !inputChecked && inputCheckedOne && inputCheckedTwo ? (plansPrice + largeStorage + customProfile) :  inputChecked && inputCheckedOne && !inputCheckedTwo ? (plansPrice + largeStorage + onlineAddOn) :  inputChecked && inputCheckedOne && inputCheckedTwo ? (plansPrice + largeStorage + onlineAddOn + customProfile) : plansPrice}{toggleBtn ? '/yr' : '/mo'}</p>
          </div>
        </div>
        <div className="selectBtns">
          <p onClick={clickBack}>Go back</p>
          <button onClick={summaryToThankYou}>Confirm</button>
        </div>
        </div>
        <div className={changeScreen === 4 ?"lastPage active" : 'lastPage'}>
          <img src={ThankYouIcon} alt="Thank you Icon" />
          <h3>Thank you!</h3>
          <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
      </div>
      </div>
    </main>
  )
}

export default Main