package no.ntnu.courses;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Course {
    @ManyToMany
    @JoinTable(
            name = "course_provider",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "provider_id"))
    private Set<Provider> providers = new HashSet<>();
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

    public void setCategoryId(Category categoryId) {
        this.categoryId = categoryId;
    }

    public Level getLevelId() {
        return this.levelId;
    }

    public void setLevelId(Level levelId) {
        this.levelId = levelId;
    }

    public Session getSessionId() {
        return this.sessionId;
    }

    public void setSessionId(Session sessionId) {
        this.sessionId = sessionId;
    }

    public int getCourseId() {
        return this.courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<Provider> getProviders() {
        return this.providers;
    }

    public void setProviders(Set<Provider> providers) {
        this.providers = providers;
    }

    public String getKeywords() {
        return this.keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public float getCourseSize() {
        return this.courseSize;
    }

    public void setCourseSize(float courseSize) {
        this.courseSize = courseSize;
    }

    public float getHoursPerWeek() {
        return this.hoursPerWeek;
    }

    public void setHoursPerWeek(float hoursPerWeek) {
        this.hoursPerWeek = hoursPerWeek;
    }

    public String getRelatedCertifications() {
        return this.relatedCertifications;
    }

    public void setRelatedCertifications(String relatedCertifications) {
        this.relatedCertifications = relatedCertifications;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getCost() {
        return this.cost;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }

}
