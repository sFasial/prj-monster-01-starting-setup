const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            specialAttack: 0
        };
    },
    computed: {
        SetMonsterHealthWidth() {
            return { width: this.monsterHealth + '%' }
        },
        SetPlayerHealthWidth() {
            return { width: this.playerHealth + '%' }
        },
    },
    watch: {

    },
    methods: {
        Attack() {
            this.specialAttack++
            const playerOrMonster = Math.random() > 0.5 ? 'player' : 'monster'
            console.log('playerOrMonster', playerOrMonster);
            const playerToAttack = playerOrMonster == 'player' ? 'player' : 'monster';
            const randomValueTwentyPercent = Math.trunc(Math.random() * 20) + 1;
            const randomValue_15_Percent = Math.trunc(Math.random() * 15) + 1;

            console.log('randomValueTwentyPercent', randomValueTwentyPercent);
            console.log('randomValue_15_Percent', randomValue_15_Percent);

            if (playerToAttack == 'player') {
                this.playerHealth -= randomValueTwentyPercent
                this.monsterHealth -= randomValue_15_Percent
            }
            else {
                this.monsterHealth -= randomValueTwentyPercent
                this.playerHealth -= randomValue_15_Percent
            }

            console.log('playerHealth', this.playerHealth);
            console.log('monsterHealth', this.monsterHealth);

        },
        SpecialAttack() {
            if (this.specialAttack >= 3) {
                this.monsterHealth -= 20
                this.playerHealth -= 15
                this.specialAttack = 0;
            }
        }
    }
});
app.mount('#game');




// --------------------------

/* 1 st project working 
function GetRandomValue(min, max) {
    const attackValue = Math.floor(Math.random() * (max - min)) + min;
    return attackValue;
}

const app = Vue.createApp({


    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            roundCounter: 0,
            winner: null,
            logs: [{ actionBy: '', actionType: '', actionValue: '' }],
            isActive: this.roundCounter < 3 ? true : false
        }
    },
    computed: {
        monsterBarStyle() {
            if (this.monsterHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.monsterHealth + '%' }
        }
    },

    watch: {
        playerHealth(value) {
            // alert(value)
            if (value <= 0 && this.monsterHealth <= 0) {
                //A Draw
                this.winner = "draw";
            }
            else if (value < 0) {
                //Player lost
                this.winner = "monsterwon";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                //A Draw
                this.winner = "draw";
            }
            else if (value < 0) {
                //Monster lost
                this.winner = "playerwon";
            }
        }
    },

    methods: {

        AddLogMessage(who, what, value) {
            // console.log(who , what , value);
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        },

        startNewGame() {
            // console.log('New game Started');
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.roundCounter = 0;
            this.winner = null;

            this.logs = [{}];
        },

        Attack() {
            // console.log('Attack');
            this.roundCounter++;
            const playerHealth = Math.random(5, 12);
            // console.log('playerHealth Test', playerHealth);

            const AttackValue = Math.floor(Math.random() * (12 - 5)) + 5;
            // console.log('playerAttackValue', AttackValue);

            this.monsterHealth = this.monsterHealth - AttackValue

            this.AddLogMessage('player','Attack()',AttackValue)

            this.AttackPlayer();

        },
        AttackPlayer() {
            // console.log('Attack Player Invoked');
            const attackValue = GetRandomValue(8, 15);
            this.playerHealth = this.playerHealth - attackValue;
            // console.log('MonsterAttackValue', attackValue);

            this.AddLogMessage('monster','AttackPlayer()',attackValue)

        },

        SpecialAttack() {
            this.roundCounter = 0;
            // console.log('SpecialAttack');
            const attackValue = GetRandomValue(10, 25);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.AddLogMessage('player','SpecialAttack()',attackValue)


            // console.log('PlayerAttackValue', attackValue);

            this.AttackPlayer();
        },

        Heal() {
            this.roundCounter++;
            // console.log('Heal');
            var healValue = GetRandomValue(10, 20);
            this.AddLogMessage('player','Heal()',healValue)

            if (this.playerHealth + healValue < 100) {
                this.playerHealth = this.playerHealth + healValue;
            }
            else {
                this.playerHealth = 100;
            }
            this.AttackPlayer();

        },

        Surrender() {
            // console.log('Surrender');
            this.winner = "monsterwon";
            this.logs = [{}];
        }
    }

})

app.mount("#game");

*/