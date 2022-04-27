function init() {
   
    let autoscroll = null
    let timer
  
    const pageTop = document.querySelector('.page_top_nav')
    const bunnyWrapper = document.querySelector('.bunny_wrapper')
    const wrapper = document.querySelector('.wrapper')
    const development = [
      'HTML',
      'CSS',
      'JavaScript',
      'SASS',
      'React',
      'Node.js',
      'MongoDB',
      'Express',
      'Python',
      'Django',
      'PostgreSQL',
      'Git',
      'Yarn',
      'npm',
      'VS Code',
      'Insomnia',
      'TablePlus',
      'Heroku'
    ]
  
    const design = [
      'Illustrator',
      'Photoshop',
      'Trello'
    ]
  
    const languages = [
      'Vietnamese (native)',
      'English'
    ]
  
    const softSkill  = [
      'Organisation',
      'Communication',
      'Collaboration',
      'Project Management'
    ]
  
  
  
  
  
    // const scrollPos = document.querySelector('.scrollpos')
    const navIndicators = document.querySelectorAll('.indicator')
    const windowDivs = document.querySelectorAll('.window')
    const nav = document.querySelector('nav')
  
    //*scramble related
    const title = document.querySelector('.title')
    const intro = document.querySelector('.intro')
    const navLink = document.querySelectorAll('.link')
    const linkNames = ['top','about', 'projects', 'experience', 'contact']
    const linkLabel = document.querySelectorAll('.link_label')
    let activeIndex = 0
  
    const skillBox = document.querySelectorAll('.skills')
    const otherSkillBox = document.querySelectorAll('.other_skills')
  
    const mapSkills = (arr, target) =>{
      let delay = 0.1
      arr.forEach(ele=>{
        delay += 0.05
        const newDiv = document.createElement('div')
        newDiv.classList.add('skill_divs_wrapper')
        // newDiv.classList.add('anim')
        // newDiv.style.animationDelay = `${delay}s`
        newDiv.innerHTML = `
        <div class='skill_divs anim' style="animation-delay:${delay}s" >
          <div class="image_wrapper">
            <img src="./assets/icon/${ele.replace('.','').replace(' ','').toLowerCase()}.svg" alt ="${ele}" />
          </div>  
          <p>${ele}</p>
        </div>  
        `
        target.appendChild(newDiv)
      })
    }
    
    mapSkills(development,skillBox[0])
    mapSkills(design,skillBox[1])
  
    const mapOtherSkills = (arr, target) =>{
      let delay = 0.1
      arr.forEach(ele=>{
        delay += 0.05
        const newUl = document.createElement('ul')
        newUl.classList.add('other_skill_divs')
        newUl.classList.add('anim')
        newUl.style.animationDelay = `${delay}s`
        newUl.innerHTML = `
          <li class="skill_label">${ele}</li>
        `
        target.appendChild(newUl)
      })
    }
  
    mapOtherSkills(languages,otherSkillBox[0])
    mapOtherSkills(softSkill,otherSkillBox[1])
  
  
    const handleScroll = () =>{
      if (autoscroll) return
      // scrollPos.innerText = window.scrollY
      triggerIndicatorChange()
      // console.log(e.deltaY)
    }
  
    window.addEventListener('scroll', handleScroll)
    
  
    const navigateTo = index => {
      // window.scrollTo(0, pageBoundaries()[index])
      clearTimeout(timer)
      autoscroll = true
      window.scrollTo({
        top: pageBoundaries()[index],
        left: 0,
        behavior: 'smooth'
      })
      deactivate(activeIndex)
      activate(index)
      timer = setTimeout(()=>{
        autoscroll = false
      },2000)
    }
  
  
    const pageBoundaries = ()=>{
      const arr = []
      windowDivs.forEach(ele=>{
        arr.push(ele.getBoundingClientRect().top + window.scrollY)
      })
      return arr
    }
    

    const triggerIndicatorChange = ()=>{
      pageBoundaries().forEach((ele,i)=>{
        if (!windowDivs[i + 1]){
          window.scrollY >= ele ? 
            activate(i)
            :
            deactivate(i)
          return
        }
        window.scrollY >= ele && window.scrollY < pageBoundaries()[i + 1] ? 
          activate(i)
          :
          deactivate(i)
      })
    }
    
    const activate = index =>{
      if (index === activeIndex) return
      activeIndex = index
      navIndicators[index].classList.add('selected')
      windowDivs[index].classList.add('display')
      triggerShuffle(linkLabel[index], linkNames[index], 7)
      index === 1 || index === 3 ? 
        nav.classList.add('dark')
        :
        nav.classList.remove('dark')
    }
  
    const deactivate = index=>{
      navIndicators[index].classList.remove('selected')
      windowDivs[index].classList.remove('display')
    }
  

    const random = '*&%!1234567ABC'
    let interval
  
    const triggerShuffle = (target, text, speed) => {
      target.innerHTML = ''
      scrambleLetter(target, 0, 0, text, speed)
    }
  
    const scrambleLetter = ( target, scrambledLetters, shuffle, text, speed ) => {
      const shuffleCount = 4
      // const speed = 7 
  
      if (target.textContent.length < text.length) {  
        if (shuffle < shuffleCount){
          const output = text.slice(0, scrambledLetters) 
          target.innerText = output + random[Math.floor(Math.random() * (random.length))] 
          interval = setTimeout(()=>{
            scrambleLetter(target, scrambledLetters, shuffle + 1, text)
          },speed)
        } else { 
          scrambleLetter(target, scrambledLetters + 1, 0, text) 
        }   
      } 
      if (target.textContent.length >= text.length){
        target.innerHTML = text 
        clearTimeout(interval)
      }
    }  
  
   
    const hoverTextEffect = () =>{
      title.innerHTML = ''
      triggerShuffle(title, 'kaakou the honeykuma', 4)
    }
  
  
    pageTop.addEventListener('click', ()=>navigateTo(0))
    title.addEventListener('mouseover', hoverTextEffect)
  
    navLink.forEach((link,i)=>{
      link.addEventListener('click',()=>navigateTo(i))
    })
  
    setTimeout(()=>{
      nav.classList.add('white')
    },2600)
    
  
    const isInViewport = element => {
      const rect = element.getBoundingClientRect()
      return (
        rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }
  
    const scrollAnimateElm = document.querySelectorAll('.anim')
    const scrollAnimateSwitchElm = document.querySelectorAll('.anim_switch')
  
    const scrollAnimateLoad = function() {
      scrollAnimateElm.forEach((_ele,i)=>{
        const switchMargin = 100
        window.innerHeight > scrollAnimateElm[i].getBoundingClientRect().top + switchMargin ?
          scrollAnimateElm[i].classList.add('animate')
          :
          null
      })
  
      scrollAnimateSwitchElm.forEach((_ele,i)=>{
        isInViewport(scrollAnimateSwitchElm[i]) ?
          scrollAnimateSwitchElm[i].classList.add('animate')
          :
          scrollAnimateSwitchElm[i].classList.remove('animate')
      })
  
      window.pageYOffset === 0 ?
        triggerTopState()
        :
        stopTopState()
    }
  
    const triggerTopState = () => {
      pageTop.classList.add('hide')
      nav.classList.add('hide')
    }
  
    const stopTopState = () => {
      pageTop.classList.remove('hide')
      nav.classList.remove('hide')
    }
  
    const loadText = 'loading'
    const loadingPage = document.querySelector('.load')
    const loading = document.querySelector('.loading')
    const loadInterval = setInterval(function(){
      loadingPage.classList.contains('hide') ?
        triggerShuffle(loading, loadText.toUpperCase())
        :
        clearInterval(loadInterval)
    },1200) 
    
    window.onload = function() {
      loadingPage.classList.add('hide')
  
      setTimeout(()=>{
        bunnyWrapper.classList.add('delete')
        wrapper.classList.add('absolute')
        triggerShuffle(title, 'kaakou the honeykuma', 4)
        triggerShuffle(intro, 'web developer', 4)
      
        navLink.forEach((_link,i)=>{
          triggerShuffle(linkLabel[i], linkNames[i], 7)
        }) 
        navIndicators[0].classList.add('selected')
      },1600)
    
      bunnyWrapper.classList.add('run')
      wrapper.classList.add('run')
    }
    // window.addEventListener('load', scrollAnimateLoad)
    window.addEventListener('scroll', scrollAnimateLoad)
  }
  
  window.addEventListener('DOMContentLoaded', init)
  
