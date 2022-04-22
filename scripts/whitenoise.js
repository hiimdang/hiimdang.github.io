
function init() {
    /* noise */ 
      const noisebox = document.querySelector('.whitenoise')
      const ctx = noisebox.getContext('2d')
    
    
      function resize() {
        noisebox.width = window.innerWidth
        noisebox.height = window.innerHeight
      }
      resize()
      window.onresize = resize
        
      function noise(ctx) {
            
        const w = ctx.canvas.width
        const h = ctx.canvas.height
        const idata = ctx.createImageData(w, h)
        const buffer32 = new Uint32Array(idata.data.buffer)
    
        
        for (let i = 0; i < buffer32.length;)
          buffer32[i++] = ((255 * Math.random()) | 0) << 24
            
        ctx.putImageData(idata, 0, 0)
      }
        
      let toggle = true;
        
      // added toggle to get 30 FPS instead of 60 FPS
      (function loop() {
        toggle = !toggle
        if (toggle) {
          requestAnimationFrame(loop)
          return
        }
        noise(ctx)
        requestAnimationFrame(loop)
      })()
    
    }
    
    window.addEventListener('DOMContentLoaded', init)