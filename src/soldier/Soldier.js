class Soldier { 
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

const strength = 10; 
const health = 100;

const soldier = new Soldier(health, strength);

module.exports = Soldier;
