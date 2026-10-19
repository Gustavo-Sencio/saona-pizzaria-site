# Saona Pizzaria — site institucional

Site da Saona Pizzaria Delivery, em Campinas, com apresentação, cardápio por categorias, galeria e contato. Projeto em HTML, CSS e JavaScript, preparado para hospedagem estática no Cloudflare Pages.

## Recursos

- Cardápio com categorias de pizzas salgadas, combos, pizzas doces, ofertas e bebidas.
- Galeria com ampliação das imagens, navegação anterior/próxima e suporte ao teclado.
- Acesso ao WhatsApp, ligação telefônica, Instagram, localização e cardápio digital.
- Layout responsivo, navegação por teclado e respeito à preferência por movimento reduzido.
- Conteúdo acessível sem JavaScript: todos os itens continuam visíveis e os links funcionam.

Os pedidos são encaminhados ao WhatsApp ou ao KIcardápio. Este projeto não recebe pagamentos nem registra pedidos em um banco próprio.

## Executar localmente

Abra `index.html` no navegador. Não é necessário instalar dependências ou compilar o projeto.

Opcionalmente, na pasta do projeto:

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000`.

## Estrutura

| Arquivo | Função |
| --- | --- |
| `index.html` | Conteúdo, produtos, preços, contatos e dados estruturados |
| `style.css` | Identidade visual e adaptação às telas |
| `app.js` | Navegação móvel, filtros e galeria |
| `assets/` | Logotipo e imagens locais |
| `_headers` | Cabeçalhos para a hospedagem |
| `PUBLICAR.md` | Instruções para Cloudflare Pages |
| `FONTES.md` | Origem dos dados e das imagens |

## Atualizar conteúdo

Os dados e imagens foram consultados no cardápio público em **19/10/2026**. Esta versão é estática e **não sincroniza automaticamente com o KIcardápio**.

- Para atualizar produtos, preços e descrições, edite os artigos com classe `menu-card` no `index.html`.
- Os produtos usam `data-category`: `pizzas`, `combos`, `doces`, `ofertas` ou `bebidas`.
- Mantenha preços e promoções alinhados ao cardápio oficial. Quando o valor depende dos sabores, o site encaminha para as opções no KIcardápio.
- Atualize horários tanto no bloco de contato quanto em `openingHoursSpecification`, no JSON-LD do cabeçalho.
- Ao trocar contatos, atualize os links `tel:` e `wa.me` e os números visíveis.
- A galeria usa botões com `data-gallery-index` e `data-caption`. Ao adicionar imagens, mantenha os índices em sequência, a partir de zero.
- As imagens atuais vêm do cardápio fornecido. Fotos próprias em resolução maior podem melhorar a apresentação, especialmente a imagem de abertura.

Não há chaves de API, credenciais, rastreadores, formulários ou dependências remotas no código entregue. As imagens foram copiadas para `assets/` para o site não depender da disponibilidade do servidor de imagens do cardápio.

## Publicação

Consulte [PUBLICAR.md](PUBLICAR.md). A hospedagem alvo é o Cloudflare Pages. O projeto ainda precisa ser enviado ao repositório e publicado na sua conta.

## Canais da Saona

- [Cardápio digital](https://kicardapio.com.br/saona-pizzaria)
- [Instagram](https://www.instagram.com/saonapizzaria/)
- WhatsApp: (19) 99893-3848
- Disk Pizza: (19) 3278-3073

As imagens e a identidade visual da Saona pertencem aos respectivos titulares; o código deste repositório não concede licença para reutilizar esses materiais em outros negócios.
