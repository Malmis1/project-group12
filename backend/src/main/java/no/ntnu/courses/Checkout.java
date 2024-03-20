package no.ntnu.courses;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import java.util.Date;

@Entity
public class Checkout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int checkoutId;

    @Column(nullable = false)
    private String country;

    @Column(nullable = false)
    private String streetAddress;

    @Column(nullable = false)
    private int postalCode;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    private String emailAddress;

    @Column(nullable = false)
    private String cardNumber;

    @Column(nullable = false)
    private Date expirationDate;

    @Column(nullable = false)
    private int cvv;

    @Column(nullable = false)
    private double totalPrice;

    @Column(nullable = false)
    private String paymentMethod;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private User userId;

    public User getUserId() {
        return this.userId;
    }

    public int getCheckoutId() {
        return this.checkoutId;
    }

    public String getCountry() {
        return this.country;
    }

    public String getStreetAddress() {
        return this.streetAddress;
    }

    public int getPostalCode() {
        return this.postalCode;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public String getEmailAddress() {
        return this.emailAddress;
    }

    public String getCardNumber() {
        return this.cardNumber;
    }

    public Date getExpirationDate() {
        return this.expirationDate;
    }

    public int getCvv() {
        return this.cvv;
    }

    public double getTotalPrice() {
        return this.totalPrice;
    }

    public String getPaymentMethod() {
        return this.paymentMethod;
    }

    public void setUserId(User userId) {
        this.userId = userId;
    }

    public void setCheckoutId(int checkoutId) {
        this.checkoutId = checkoutId;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public void setPostalCode(int postalCode) {
        this.postalCode = postalCode;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
}
