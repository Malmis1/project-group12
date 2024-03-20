package no.ntnu.courses;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class Level {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int levelId;

    @Column(nullable = false)
    private String level;

    public int getLevelId() {
        return this.levelId;
    }

    public String getLevel() {
        return this.level;
    }

    public void setLevelId(int levelId) {
        this.levelId = levelId;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
