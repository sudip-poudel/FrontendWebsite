import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../component/Navbar'
import Banner from '../component/banner/Banner'
import Footer from '../component/footer/Footer'

const PaymentSuccess = () => {
	const location = useLocation();
	const [status, setStatus] = useState('loading');

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const pidx = queryParams.get('pidx');
		const staffId = queryParams.get('staffId');
		const date = queryParams.get('date');
		const name = queryParams.get('name');
		const email = queryParams.get('email');
		const phone = queryParams.get('phone');
		const time = queryParams.get('time');
		const branchId = queryParams.get('branchId');


		// Special: serviceIds (need to split!)
		const serviceIds = queryParams.get('serviceIds') ? queryParams.get('serviceIds').split(',') : [];
		console.log(queryParams);

		if (pidx) {
			async function verifyPayment() {

				await fetch('http://localhost:4000/client/verify-payment', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ pidx, data: { staffId, date, name, email, phone, time, branchId, serviceIds } }),
				})
					.then(async (response) => {
						const data = await response.json();
						console.log(data)

						if (data.status === 'Completed') {
							setStatus('success');
						} else if (data.status === 'Duplicate') {
							setStatus('duplicate');
						}
						else {
							setStatus('failure');
						}
					})
					.catch((error) => {
						console.error('Payment verification failed:', error);
						setStatus('failure');
					});
			}
			verifyPayment()
		}
	}, [location]);


	return (
		<>

			<Banner />
			<Navbar />
			{status && <div className='flex justify-center items-center h-screen'>
				{
					status === 'loading' ? (
						<div>Processing your payment...</div>
					) : status === 'success' ? (
						<div>🎉 Payment Successful! Thank you.</div>
					) : status === 'duplicate' ? (
						<div>🎉 Payment is already done! Thank you.</div>
					)
						: (
							<div>❌ Payment Failed. Please try again.</div>
						)
				}
			</div>
			}

			<div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
				<img
					src="./Image/BookingHero.png"
					alt="Hero Section"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black opacity-50"></div>
			</div>

			<Footer />
		</>
	)

};

export default PaymentSuccess;
