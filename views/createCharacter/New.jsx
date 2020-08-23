const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div class="newCreateCharacter">
                    <h1>New Character Page</h1>
                    <form action="/createcharacter" method="POST">

                        <label HTMLFor="userclass">Class name</label><select name="userclass" id="userclass" defaultValue="">
                            <optgroup label="Class">
                                <option value="Barbarian">Barbarian</option>
                                <option value="Bard">Bard</option>
                                <option value="Cleric">Cleric</option>
                                <option value="Druid">Druid</option>
                                <option value="Fighter">Fighter</option>
                                <option value="Monk">Monk</option>
                                <option value="Paladin">Paladin</option>
                                <option value="Ranger">Ranger</option>
                                <option value="Rogue">Rogue</option>
                                <option value="Sorcerer">Sorcerer</option>
                                <option value="Warlock">Warlock</option>
                                <option value="Wizard">Wizard</option>
                            </optgroup>
                        </select><br />
                        <label HTMLFor="description">Backstory</label><input type="text" name="description" id="description"></input><br />
                        <label HTMLFor="race">Race</label><select name="race" id="race">
                            <optgroup label="race">
                                <option value="Aarakocra">Aarakocra</option>
                                <option value="Dragonborn">Dragonborn</option>
                                <option value="Dwarf">Dwarf</option>
                                <option value="Elf">Elf</option>
                                <option value="Genasi">Genasi</option>
                                <option value="Gnome">Gnome</option>
                                <option value="Goliath">Goliath</option>
                                <option value="Half-Elf">Half-Elf</option>
                                <option value="Halfling">Halfling</option>
                                <option value="Half-Orc">Half-Orc</option>
                                <option value="Human">Human</option>
                                <option href="races/5f3f246b75c5d03f81420cc6" value="Tiefling">Tiefling</option>  /**/ 
                            </optgroup>
                        </select><br />
                        <label HTMLFor="spells">Cantrip 1st selection</label><select name="spells" id="spells">
                            <optgroup label="spells">
                                <option value="Acid Splash">Acid Splash</option>
                                <option value="Chill Touch">Chill Touch</option>
                                <option value="Dancing Lights">Dancing Lights</option>
                                <option value="Druidcraft">Druifcraft</option>
                                <option value="Eldritch Blast">Eldritch Blast</option>
                                <option value="Fire Bolt">Fire Bolt</option>
                                <option value="Guidance">Guidance</option>
                                <option value="Light">Light</option>
                                <option value="Mage Hand">Mage Hand</option>
                                <option value="Mending">Mending</option>
                                <option value="Message">Message</option>
                                <option value="Minor Illusion">Minor Illusion</option>
                                <option value="Poison Spray">Poison Spray</option>
                                <option value="Prestidigitation">Prestidigitation</option>
                                <option value="Produce Flame">Produce Flame</option>
                                <option value="Ray of Frost">Ray of Frost</option>
                                <option value="Resistance">Resistance</option>
                                <option value="Sacred Flame">Sacred Flame</option>
                                <option value="Shillelagh">Shillelagh</option>
                                <option value="Shocking Grasp">Shocking Grasp</option>
                                <option value="Spare the Dying">Spare the Dying</option>
                                <option value="Thaumaturgy">Thaumaturgy</option>
                                <option value="True Strike">True Strike</option>
                                <option value="Viscious Mockery">Viscious Mockery</option>
                            </optgroup>
                        </select><br />
                        <label HTMLFor="spells">Cantrip 2nd selection</label><select name="spells" id="spells">
                            <optgroup label="spells">
                                <option value="Acid Splash">Acid Splash</option>
                                <option value="Chill Touch">Chill Touch</option>
                                <option value="Dancing Lights">Dancing Lights</option>
                                <option value="Druidcraft">Druifcraft</option>
                                <option value="Eldritch Blast">Eldritch Blast</option>
                                <option value="Fire Bolt">Fire Bolt</option>
                                <option value="Guidance">Guidance</option>
                                <option value="Light">Light</option>
                                <option value="Mage Hand">Mage Hand</option>
                                <option value="Mending">Mending</option>
                                <option value="Message">Message</option>
                                <option value="Minor Illusion">Minor Illusion</option>
                                <option value="Poison Spray">Poison Spray</option>
                                <option value="Prestidigitation">Prestidigitation</option>
                                <option value="Produce Flame">Produce Flame</option>
                                <option value="Ray of Frost">Ray of Frost</option>
                                <option value="Resistance">Resistance</option>
                                <option value="Sacred Flame">Sacred Flame</option>
                                <option value="Shillelagh">Shillelagh</option>
                                <option value="Shocking Grasp">Shocking Grasp</option>
                                <option value="Spare the Dying">Spare the Dying</option>
                                <option value="Thaumaturgy">Thaumaturgy</option>
                                <option value="True Strike">True Strike</option>
                                <option value="Viscious Mockery">Viscious Mockery</option>
                            </optgroup>
                        </select><br />
                        <label HTMLFor="equipment">Equipment</label><input type="text" name="equipment" id="equipment"></input><br />
                        <label HTMLFor="image">Image</label><input type="text" name="text" id="image"></input><br />
                        <input type="submit" value="Create Class"></input>
                    </form>
                </div>
            </Default>
        )
    }
};

module.exports = New; 