const React = require('react');
const Default = require('../components/Default');

class New extends React.Component {
    render() {
        return (
            <Default>
                <div>
                    <form class="newCreateCharacter" action="/create" method="POST">
                    <h1>New Character Page</h1>
                    <label HTMLFor="name">Character Name</label><input type="text" name="name" id="name"></input><br />
                        <label HTMLFor="userclass">Class</label><select name="userclass" id="userclass" defaultValue="">
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
                        <label HTMLFor="description">Backstory</label><textarea type="text" name="description" id="description"></textarea><br />
                        <label HTMLFor="race">Race</label><select name="race" id="race">
                            <optgroup label="Race">
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
                        <label HTMLFor="cantrip1">Cantrip 1st selection</label><select name="cantrip1" id="cantrip1">
                            <optgroup label="1st Cantrip">
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
                        <label HTMLFor="cantrip2">Cantrip 2nd selection</label><select name="cantrip2" id="cantrip2">
                            <optgroup label="2nd Cantrip">
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
                        <label HTMLFor="firstlevelspell">First Level Spell</label><select name="firstlevelspell" id="firstlevelspell">
                            <optgroup label="1st Level Spell">
                                <option value="Alarm">Alarm</option>
                                <option value="Animal Friendship">Animal Friendship</option>
                                <option value="Bane">Bane</option>
                                <option value="Bless">Bless</option>
                                <option value="Burning Hands">Burning Hands</option>
                                <option value="Charm Person">Charm Person</option>
                                <option value="Color Spray">Color Spray</option>
                                <option value="Command">Command</option>
                                <option value="Comprehend Languages">Comprehend Languages</option>
                                <option value="Create or Destroy Water">Create or Destroy Water</option>
                                <option value="Cure Wounds">Cure Wounds</option>
                                <option value="Detect Evil and Good">Detect Evil and Good</option>
                                <option value="Detect Magic">Detect Magic</option>
                                <option value="Detect Posion and Disease">Detect Posion and Disease</option>
                                <option value="Disguise Self">Disguise Self</option>
                                <option value="Divine Favor">Ray of Frost</option>
                                <option value="Entangle">Entangle</option>
                                <option value="Expeditious Retreat">Expeditious Retreat</option>
                                <option value="Faerie Fire">Faerie Fire</option>
                                <option value="False Life">False Life</option>
                                <option value="Feather Fall">Feather Fall</option>
                                <option value="Find Familiar">Find Familiar</option>
                                <option value="Floating Disk">Floating Disk</option>
                                <option value="Fog Cloud">Fog Cloud</option>
                                <option value="Goodberry">Goodberry</option>
                                <option value="Grease">Grease</option>
                                <option value="Guiding Bolt">Guiding Bolt</option>
                                <option value="Healing Word">Healing Word</option>
                                <option value="Hellish Rebuke">Hellish Rebuke</option>
                                <option value="Heroism">Heroism</option>
                                <option value="Hideous Laughter">Hideous Laughter</option>
                                <option value="Hunter's Mark">Hunter's Mark</option>
                                <option value="Identify">Identify</option>
                                <option value="Illusory Script">Illusory Script</option>
                                <option value="Inflict Wounds">Inflict Wounds</option>
                                <option value="Jump">Jump</option>
                                <option value="Longstrider">Longstrider</option>
                                <option value="Mage Armor">Detect Posion and Disease</option>
                                <option value="Magic Missile">Magic Missile</option>
                                <option value="Protection from Good and Evil">Protection from Good and Evil</option>
                                <option value="Purify Food and Drink">Purify Food and Drink</option>
                                <option value="Sanctuary">Sanctuary</option>
                                <option value="Shield">Shield</option>
                                <option value="Shield of Faith">Shield of Faith</option>
                                <option value="Silent Image">Silent Image</option>
                                <option value="Sleep">Sleep</option>
                                <option value="Speak with Animals">Speak with Animals</option>
                                <option value="Thunderwave">Thunderwave</option>
                                <option value="Unseen Servant">Unseen Servant</option>
                            </optgroup>
                        </select><br />
                        <label HTMLFor="equipment">Weapon</label><select name="equipment" id="equipment" defaultValue="">
                            <optgroup label="Weapons">
                                <option value="Battleaxe">Battleaxe</option>
                                <option value="Hand Crossbow">Hand Crossbow</option>
                                <option value="Dagger">Dagger</option>
                                <option value="Flail">Flail</option>
                                <option value="Greatsword">Greatsword</option>
                                <option value="Javelin">Javelin</option>
                                <option value="Longbow">Longbow</option>
                                <option value="Mace">Mace</option>
                                <option value="Quarterstaff">Quarterstaff</option>
                                <option value="Rapier">Rapier</option>
                                <option value="Spear">Spear</option>
                                <option value="Trident">Trident</option>
                                <option value="Warhammer">Warhammer</option>
                            </optgroup>
                        </select><br />
                        <label HTMLFor="image">Image</label><input type="text" name="text" id="image"></input><br />
                        <label HTMLFor="username">Your name</label><input type="text" name="username" id="username" default="Enter your name here"></input><br />
                        <input type="submit" value="Create Character"></input>
                    </form>
                </div>
            </Default>
        )
    }
};

module.exports = New; 