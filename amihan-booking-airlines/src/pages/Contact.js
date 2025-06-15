import { useState } from 'react';

export default function Contact() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<div
			style={{
				maxWidth: 500,
				margin: '3rem auto',
				padding: '2rem',
				background: '#f9f9f9',
				borderRadius: '12px',
				boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
				fontFamily: 'Segoe UI, Roboto, sans-serif',
			}}
		>
			<h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Contact Us</h2>

			{submitted ? (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.2rem',
						color: '#2e7d32',
						padding: '1rem',
						background: '#e8f5e9',
						borderRadius: '8px',
					}}
				>
					Thank you for contacting us!
				</div>
			) : (
				<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
					<div>
						<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							required
							style={{
								width: '100%',
								padding: '0.75rem',
								border: '1px solid #ccc',
								borderRadius: '6px',
								fontSize: '1rem',
							}}
						/>
					</div>

					<div>
						<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
							style={{
								width: '100%',
								padding: '0.75rem',
								border: '1px solid #ccc',
								borderRadius: '6px',
								fontSize: '1rem',
							}}
						/>
					</div>

					<div>
						<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
						<textarea
							name="message"
							value={form.message}
							onChange={handleChange}
							required
							rows={5}
							style={{
								width: '100%',
								padding: '0.75rem',
								border: '1px solid #ccc',
								borderRadius: '6px',
								fontSize: '1rem',
								resize: 'vertical',
							}}
						/>
					</div>

					<button
						type="submit"
						style={{
							padding: '0.75rem',
							backgroundColor: '#1976d2',
							color: '#fff',
							fontSize: '1rem',
							border: 'none',
							borderRadius: '6px',
							cursor: 'pointer',
							transition: 'background-color 0.3s ease',
						}}
						onMouseOver={(e) => (e.target.style.backgroundColor = '#1565c0')}
						onMouseOut={(e) => (e.target.style.backgroundColor = '#1976d2')}
					>
						Send Message
					</button>
				</form>
			)}
		</div>
	);
}
