// script.js - comportamentos mínimos para o site Resplandecer Acessórios
document.addEventListener('DOMContentLoaded', ()=>{
  const products = {
    1:{title:"Pulseira Masculina de Prata", price:"R$ 179,90", id:1},
    2:{title:"Anel Feminino Coração", price:"R$ 99,90", id:2},
    3:{title:"Colar Minimalista", price:"R$ 129,90", id:3},
    4:{title:"Brinco Argola Pequena", price:"R$ 69,90", id:4}
  };

  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const buyButtons = document.querySelectorAll('.buy');
  const whatsButtons = document.querySelectorAll('.whats');

  buyButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.getAttribute('data-id');
      const prod = products[id];
      modalTitle.textContent = prod.title;
      modalPrice.textContent = prod.price;
      modal.setAttribute('aria-hidden','false');
    });
  });

  closeModal.addEventListener('click', ()=>{
    modal.setAttribute('aria-hidden','true');
  });

  // ações WhatsApp: abre conversa com número e mensagem
  whatsButtons.forEach(w=>{
    w.addEventListener('click', ()=>{
      const name = w.getAttribute('data-name');
      const number = '5511959752095'; // número fornecido por você
      const text = encodeURIComponent(`Olá, tenho interesse no produto: ${name}. Gostaria de mais informações.`);
      window.open(`https://wa.me/${number}?text=${text}`, '_blank');
    });
  });

  // botões Mercado Pago (simulados)
  document.getElementById('mp-pix').addEventListener('click', ()=>{
    alert('Simulação: aqui abriria a tela de pagamento Pix do Mercado Pago.');
  });
  document.getElementById('mp-card').addEventListener('click', ()=>{
    alert('Simulação: aqui abriria a tela de pagamento por cartão do Mercado Pago.');
  });
  document.getElementById('mp-boleto').addEventListener('click', ()=>{
    alert('Simulação: aqui geraria um boleto via Mercado Pago.');
  });
});
