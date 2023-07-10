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

const strength = 10; // Valor de ejemplo para la propiedad strength
const health = 100; // Valor de ejemplo para la propiedad health

const soldier = new Soldier(health, strength);

module.exports = Soldier;
