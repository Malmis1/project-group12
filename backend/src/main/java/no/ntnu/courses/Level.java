package no.ntnu.courses;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;

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
