  function mostrarMensaje(mensaje) {
      const aviso = document.createElement('div');
      aviso.textContent = mensaje;
      aviso.style.position = 'fixed';
      aviso.style.bottom = '30px';
      aviso.style.left = '50%';
      aviso.style.transform = 'translateX(-50%)';
      aviso.style.background = '#e06666';
      aviso.style.color = 'white';
      aviso.style.padding = '12px 30px';
      aviso.style.borderRadius = '20px';
      aviso.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
      aviso.style.fontWeight = '500';
      aviso.style.transition = 'all 0.5s ease';
      document.body.appendChild(aviso);

      setTimeout(() => {
        aviso.style.opacity = '0';
        aviso.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => aviso.remove(), 500);
      }, 2000);
    }