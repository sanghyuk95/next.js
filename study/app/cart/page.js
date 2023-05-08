//'use client'
//클라이언트 컴포넌트
//서버 컴포넌트에서는 자바스크립트 사용못함
//큰페이지는 서버컴포넌트,기능필요하면 클리이언트 컴포넌트

export default function Cart() {
  let cart = ["tomato", "pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem cart={cart[0]}></CartItem>
      <CartItem cart={cart[1]}></CartItem>
      <RedBtn blue="blue"></RedBtn>
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.cart}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function RedBtn(props) {
  return (
    <div>
      <button style={{backgroundColor: props.blue}}>aaa</button>
    </div>
  );
}
