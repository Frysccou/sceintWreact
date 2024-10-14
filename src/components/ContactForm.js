import React from 'react';

const ContactForm = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};

export default ContactForm;
