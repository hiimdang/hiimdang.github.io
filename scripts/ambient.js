function init() {
   
    const ambient = document.querySelector('.ambient')
    
    // ambient.style.backgroundColor = 'red'
  
    const randomFlow = () =>{
      const newDiv = document.createElement('div')
      newDiv.classList.add('random_box')
      const randomSize = `${Math.ceil(Math.random() * 100) + 20}px`
      newDiv.style.height = randomSize
      newDiv.style.width = randomSize
      const left = Math.ceil(Math.random() * 100)
      newDiv.style.left = `${left}%`
      const transition = Math.ceil(Math.random() * 20) + 10
      newDiv.style.transition = `${transition}s`
      newDiv.style.opacity = Math.random() / 3
  
      setTimeout(()=>{
        newDiv.style.bottom = '100%'
        newDiv.style.left = `${left - 40}%`
      },100) 
      
      ambient.appendChild(newDiv)
  
      setTimeout(()=>{
        ambient.removeChild(newDiv)
      },transition * 1000)
    }
  
    randomFlow()
  
    setInterval(()=>{
      randomFlow()
    },800)
  
    // wrapper.addEventListener('mousemove', sparkle)
  
    // {
    //   file: 'color_#00f8df5e',
    //   width: 40,
    //   height: 40,
    //   speed: 12,
    // },
  
    const imagesOne = [
      {
        file: 'title.svg',
        width: 250,
        height: 250,
        speed: 24,
        zIndex: 2
      },
      {
        file: 'down.gif',
        width: 50,
        height: 50,
        speed: 16,
        zIndex: 3
      },
      {
        file: 'invincible2.gif',
        width: (200 * (359 / 582)),
        height: 200,
        speed: 23,
        zIndex: 2
      },
      {
        file: 'collect_star.gif',
        width: (150 * (647 / 346)),
        height: 150,
        speed: 20,
        zIndex: 2
      },
      {
        file: 'game_play_3.png',
        width: 250,
        height: (250 * (640 / 647)),
        speed: 28,
        zIndex: 1
      },
      // {
      //   file: 'right.gif',
      //   width: 50,
      //   height: 50,
      //   speed: 15,
      //   zIndex: 3
      // },
      {
        file: 'sleep.gif',
        width: 50,
        height: 50,
        speed: 12,
        zIndex: 3
      }
      // {
      //   file: 'invincible.gif',
      //   width: 50,
      //   height: (50 * (88 / 86)),
      //   speed: 18,
      //   zIndex: 3
      // }
    ]
  
    const imagesTwo = [
      {
        file: 'entry.gif',
        width: 250 * (800 / 665),
        height: 250,
        speed: 24,
        zIndex: 2
      },
      {
        file: 'pokeball_hover.gif',
        width: 70 * (208 / 189),
        height: 70,
        speed: 16,
        zIndex: 3
      },
      {
        file: 'eevee_page.png',
        width: 250 * (900 / 533),
        height: 250,
        speed: 28,
        zIndex: 1
      },
      {
        file: 'bop.gif',
        width: 80 * (534 / 110),
        height: 80,
        speed: 22,
        zIndex: 2
      }
      // {
      //   file: 'catching_pokemon.gif',
      //   width: 120 * (900 / 439),
      //   height: 120,
      //   speed: 20,
      //   zIndex: 3
      // }
    ]
  
    const imagesThree = [
      {
        file: 'pokezon_home_pika.png',
        width: 200 * (514 / 300),
        height: 200,
        speed: 24,
        zIndex: 1
      },
      {
        file: 'hover_effect.gif',
        width: 50 * (509 / 90),
        height: 50,
        speed: 16,
        zIndex: 3
      },
      {
        file: 'eevee.gif',
        width: 150 * (900 / 1050),
        height: 150,
        speed: 20,
        zIndex: 3
      },
      {
        file: 'adding_to_basket.gif',
        width: 100 * (900 / 509),
        height: 100,
        speed: 15,
        zIndex: 2
      }
    ]
  
    const imagesFour = [
      {
        file: 'index16.png',
        width: 200 * (388 / 300),
        height: 200,
        speed: 24,
        zIndex: 1
      },
      {
        file: 'sign_in.gif',
        width: 90 * (342 / 200),
        height: 90,
        speed: 18,
        zIndex: 3
      },
      {
        file: 'drawing.gif',
        width: 130 * (307 / 300),
        height: 130,
        speed: 16,
        zIndex: 3
      },
      {
        file: 'home.gif',
        width: 200 * (307 / 250),
        height: 200,
        speed: 18,
        zIndex: 2
      }
    ]
    
    
    // ./assets/catblob.png
    const imageSlides = document.querySelectorAll('.project_image_wrapper')
  
    const imgNums = {
      imgNo1: -1,
      imgNo2: -1,
      imgNo3: -1,
      imgNo4: -1
    }
    
    // let imgNo = -1
    const triggerSlide = (images, target, index) => {
      if (!target.classList.contains('animate')){
        target.innerHTML = ''
        imgNums[`imgNo${index}`] = -1
        setTimeout(()=>{
          triggerSlide(images,target,index)
        },200)
        return
      }
      
      imgNums[`imgNo${index}`] < (images.length - 1) ?
        imgNums[`imgNo${index}`]++
        :
        imgNums[`imgNo${index}`] = 0
      const counter = imgNums[`imgNo${index}`]
      const newImg = document.createElement('div')
      newImg.classList.add('slide')
      images[counter].file.split('_')[0] === 'color' ?
        newImg.style.backgroundColor = images[counter].file.split('_')[1]
        :
        newImg.innerHTML = `<img src='./assets/slide_img/${images[counter].file}' alt='${images[counter].file}' />` 
      target.appendChild(newImg)
      newImg.style.zIndex = `${images[counter].zIndex}` 
      newImg.style.width = `${images[counter].width}px` 
      newImg.style.height = `${images[counter].height}px` 
      images[counter].zIndex === 3 ?
        newImg.style.top = `${Math.ceil(Math.random() * 20) + 30}%`
        :
        newImg.style.top = `${Math.ceil(Math.random() * 20)}%`
  
      target.childElementCount < 4 ?
        newImg.style.right = `${30 - (target.childElementCount * 10)}%`
        :
        newImg.style.right = '-80%'
  
      target.classList.contains('animate') ?
        newImg.style.transition = `${images[counter].speed}s linear`
        :  
        newImg.style.transition = `${1}s linear`
  
      setTimeout(()=>{
        if (!target.classList.contains('animate')) return
        newImg.style.right = '150%'
      },100)
  
      setTimeout(()=>{
        if (!target.classList.contains('animate')) return
        target.removeChild(newImg)
      },images[counter].speed * 800)
      
      let timer
      target.childElementCount < 3 ?
        timer = 1000 + (target.childElementCount * 800)
        :
        timer = 2500
  
      setTimeout(()=>{
        triggerSlide(images,target,index)
      },timer)
    }
    
    setTimeout(()=>{
      triggerSlide(imagesOne,imageSlides[0],1)
      triggerSlide(imagesTwo,imageSlides[1],2)
      triggerSlide(imagesThree,imageSlides[2],3)
      triggerSlide(imagesFour,imageSlides[3],4)
    },2500)
  
  
  }
  
  window.addEventListener('DOMContentLoaded', init)
