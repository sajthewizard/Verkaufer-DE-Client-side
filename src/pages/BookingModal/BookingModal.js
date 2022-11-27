import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const location = form.location.value;
        const phone = form.phone.value;
        console.log(location, phone);
        setProduct(null);

    }
    const { user } = useContext(AuthContext);

    const { name, price } = product;
    return (
        <div>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative grid grid-cols-1 gap-2 ">
                    <label htmlFor="booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className="badge badge-outline">Selling at: {price}</div>
                    <p>Name: {user?.displayName ? `${user.displayName}` : 'not available'}</p>
                    <p>Email: {user.email} </p>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 '>
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input name="location" type="text" placeholder="Meeting Place" className="input input-bordered w-full " />
                        <input type="submit" value="Submit" className=" btn btn-warning w-full " />

                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;