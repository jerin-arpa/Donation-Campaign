const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('money-donation');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id => {
    const storedDonation = getStoredDonation();
    const exists = storedDonation.find(donationId => donationId === id);
    if (!exists) {
        storedDonation.push(id);
        localStorage.setItem('money-donation', JSON.stringify(storedDonation));
    }
}

export { getStoredDonation, saveDonation };