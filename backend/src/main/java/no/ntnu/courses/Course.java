package no.ntnu.courses;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int courseId;

    @Column(nullable = false, unique = true)
    private String title;

    @Column(nullable = false)
    private String keywords;

    @Column(nullable = false)
    private float courseSize;

    @Column(nullable = false)
    private float hoursPerWeek;

    @Column(nullable = false)
    private String relatedCertifications;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private float cost;

    @ManyToOne
    @JoinColumn(name = "categoryId", nullable = false)
    private Category categoryId;

    @ManyToOne
    @JoinColumn(name = "levelId", nullable = false)
    private Level levelId;

    @ManyToOne
    @JoinColumn(name = "sessionId", nullable = false)
    private Session sessionId;


    public Category getCategoryId() {
        return this.categoryId;
    }

    public Level getLevelId() {
        return this.levelId;
    }

    public Session getSessionId() {
        return this.sessionId;
    }

    public int getCourseId() {
        return this.courseId;
    }

    public String getTitle() {
        return this.title;
    }

    public String getKeywords() {
        return this.keywords;
    }

    public float getCourseSize() {
        return this.courseSize;
    }

    public float getHoursPerWeek() {
        return this.hoursPerWeek;
    }

    public String getRelatedCertifications() {
        return this.relatedCertifications;
    }

    public String getDescription() {
        return this.description;
    }

    public float getCost() {
        return this.cost;
    }

    public void setCategoryId(Category categoryId) {
        this.categoryId = categoryId;
    }

    public void setLevelId(Level levelId) {
        this.levelId = levelId;
    }

    public void setSessionId(Session sessionId) {
        this.sessionId = sessionId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public void setCourseSize(float courseSize) {
        this.courseSize = courseSize;
    }

    public void setHoursPerWeek(float hoursPerWeek) {
        this.hoursPerWeek = hoursPerWeek;
    }

    public void setRelatedCertifications(String relatedCertifications) {
        this.relatedCertifications = relatedCertifications;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }

}
