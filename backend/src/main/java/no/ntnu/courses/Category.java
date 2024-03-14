package no.ntnu.courses;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int categoryId;

    @Column(nullable = false)
    private String category;

    public int getCategoryId() {
        return this.categoryId;
    }

    public String getCategory() {
        return this.category;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
