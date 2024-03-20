package no.ntnu.courses;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int providerId;

    @Column(nullable = false)
    private String provider;

    @Column(nullable = false)
    private float fee;

    public int getProviderId() {
        return this.providerId;
    }

    public String getProvider() {
        return this.provider;
    }

    public float getFee() {
        return this.fee;
    }

    public void setProviderId(int providerId) {
        this.providerId = providerId;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public void setFee(float fee) {
        this.fee = fee;
    }
}
