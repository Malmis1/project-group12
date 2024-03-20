package no.ntnu.courses;

import jakarta.persistence.*;


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

    public void setLevelId(int levelId) {
        this.levelId = levelId;
    }

    public String getLevel() {
        return this.level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
