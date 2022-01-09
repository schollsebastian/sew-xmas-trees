package at.htl;

import java.math.BigDecimal;

public class Tree {
    private final int id;
    private final TreeType type;
    private final double heightMeters;
    private final BigDecimal price;
    private boolean sold;

    public Tree(int id, TreeType type, double heightMeters, BigDecimal price) {
        this.id = id;
        this.type = type;
        this.heightMeters = heightMeters;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public TreeType getType() {
        return type;
    }

    public double getHeightMeters() {
        return heightMeters;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public boolean isSold() {
        return sold;
    }

    public void setSold(boolean sold) {
        this.sold = sold;
    }
}
