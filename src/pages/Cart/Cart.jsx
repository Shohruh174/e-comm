import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import Payment1 from "../../components/Payment1/Payment1";
import Payment2 from "../../components/Payment2/Payment2";
import Payment3 from './../../components/Payment3/Payment3';
import Img1 from "../../assets/images/saleCardBg3.png"
import { MinusIcon, PlusIcon, X } from "../../assets/icons/icons";
import "./Cart.scss";

const getimg = img => <img src={img} width="135" height="95" alt="" />

const createData = (img, title, price, unitPrice) => {
	return {img, title, price, unitPrice}
};
  
const rows = [
	createData(getimg(Img1), "Nike Airmax 270 react", 998, 499),
	createData(getimg(Img1), "Nike Airmax 270 react", 998, 499),
];

const Cart = () => {	
	const [ state, setState ] = useState(1);
	const [ price, setPrice ] = useState(499);
	const [ open1, setOpen1 ] = useState(false);
	const [ open2, setOpen2 ] = useState(false);
	const [ open3, setOpen3 ] = useState(false)

	const multiply = () => state + 1 ? setPrice(price + price) : undefined;
	const division = () => state - 1 ? setPrice(price / 2) : undefined;
	const minus = () => state > 1 ? setState(state - 1) : undefined;
	const plus = () => setState(state + 1);

	return (
		<div className="Cart">
			<Header />
			<div className="container">
				<div className="Cart-inner">
					<div className="Cart-tableStyles">
						<TableContainer component={Paper}>
							<Table style={{ table: { boxShadow: "none" } }} sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell align="left" className="theadTitle">PRODUCT</TableCell>
										<TableCell align="right" style={{width: "20%"}} className="theadTitle">PRICE</TableCell>
										<TableCell align="center" style={{width: "30%"}} className="theadTitle">QTY</TableCell>
										<TableCell align="right" style={{width: "15%"}} className="theadTitle">UNIT PRICE</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row, index) => (
										<TableRow key={row.index} sx={{ 'td, th': { border: 0 } }}>
											<TableCell className="images">
												<div className="closeIcon"><X /></div>
												<TableCell align="right">{row.img}</TableCell>
												<TableCell align="left" className="pricetitle">{row.title}</TableCell>
											</TableCell>

											<TableCell align="right" className="pricetitle">${price}</TableCell>

											<TableCell className="counters">
												<button className="btnCounter" onClick={() => {minus(); division()}}><MinusIcon /></button>
												<h5 className="btn-title">{state}</h5>
												<button className="btnCounter" onClick={() => {multiply(); plus()}}><PlusIcon /></button>
											</TableCell>

											<TableCell align="center" className="pricetitle">${row.unitPrice}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>

					<div className="Total flex">
						<div className="flex items-start justify-start container relative rounded-t-md">
							<input type="text" placeholder="Voucher code" className="Total-input" />
							<button className="Total-btn">Redeem</button>
						</div>

						<div className="w-[22%]">
							<div className="flex items-start justify-center flex-col" style={{borderBottom: "2px solid #F6F7F8"}}>
								<div className="flex items-center justify-between w-[100%] mb-6">
									<h5 className="subtotal">Subtotal</h5>
									<span className="subtotal">${price}</span>
								</div>
								<div className="flex items-center justify-between w-[100%] mb-6">
									<h5 className="subtotal">Shipping fee</h5>
									<span className="subtotal">$20</span>
								</div>
								<div className="flex items-center justify-between w-[100%] mb-6">
									<h5 className="subtotal">Coupon</h5>
									<span className="subtotal">No</span>
								</div>
							</div>

							<div className="mt-7">
								<div className="flex items-center justify-between mb-6">
									<h3 className="total">TOTAL</h3>
									<h3 className="total">$118</h3>
								</div>
								<button className="totalBtn" onClick={() => setOpen1(true)}>Check out</button>

								{ open1 ? <Payment1 onclickevent={() => setOpen1(false)} nextpage={() => {setOpen1(false); setOpen2(true)}} /> : undefined }

								{ open2 ? <Payment2 onclickevent={() => setOpen2(false)} nextpage={() => {setOpen2(false); setOpen3(true)}} /> : undefined}

								{ open3 ? <Payment3 onclickevent={() => setOpen3(false)} nextpage={() => setOpen3(false)} /> : undefined }
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer marginTop="155px" />
		</div>
	);
};

export default Cart;