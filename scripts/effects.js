function init() {
  
    const wrapper = document.querySelector('.sparkle_wrapper')
    // const pos = document.querySelector('.pos')
  
  
  
    const sparkle = e =>{
      if (Math.random() > 1 / 3) return  
  
      // pos.innerText = `x:${e.clientX} / y:${e.clientY}`
  
      const randomX = e.clientX + (Math.ceil(Math.random() * 40 - 20))
      const randomY = e.clientY + (Math.ceil(Math.random() * 40 - 20))
      const randomClass = ['frame','fadeout', 'frame','fadeout','fadeout','fadeout_green']
  
      const newDiv = document.createElement('div')
      newDiv.classList.add('ten')
      newDiv.classList.add(randomClass[Math.floor(Math.random() * randomClass.length)])
      newDiv.style.left = `${randomX}px`
      newDiv.style.top = `${randomY}px`
      newDiv.style.opacity = `${(Math.ceil(Math.random() * 50) * 0.01)}`
      wrapper.appendChild(newDiv)
  
      setTimeout(()=>{
        wrapper.removeChild(newDiv)
      },Math.ceil(Math.random() * 500))
    }
  
  
  
    wrapper.addEventListener('mousemove', sparkle)
    wrapper.addEventListener('touchmove', sparkle)
  
  }
  
  window.addEventListener('DOMContentLoaded', init)
