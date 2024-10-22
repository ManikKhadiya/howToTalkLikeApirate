$(document).ready(function() {
    $("#normal").on("input", function() {
        var words = $(this).val();

        // Existing replacements
        words = words.replace(/ar/gi, "arrr");
        words = words.replace(/you/gi, "ye");
        words = words.replace(/your/gi, "yer");
        words = words.replace(/ for /g, " fer ");
        words = words.replace(/ to /gi, " ter ");
        words = words.replace(/ing/g, "in'");
        words = words.replace(/are/g, "be");
        words = words.replace(/ is /g, " be ");
        words = words.replace(/was/g, "be");
        words = words.replace(/the /g, "th'");
        words = words.replace(/hello/gi, "Ahoy");
        words = words.replace(/stop/gi, "avast");
        words = words.replace(/quickly/gi, "smartly");
        words = words.replace(/friend/gi, "matey");
        words = words.replace(/beer/gi, "grog");
        words = words.replace(/I'm/g, "I be");
        words = words.replace(/ yes /gi, " aye ");

        // Extended replacements  chatgpt vocab below
        words = words.replace(/money/gi, "doubloons");
        words = words.replace(/where/gi, "whar");
        words = words.replace(/island/gi, "isle");
        words = words.replace(/my/gi, "me");
        words = words.replace(/myself/gi, "meself");
        words = words.replace(/mad/gi, "addled");
        words = words.replace(/fool/gi, "scallywag");
        words = words.replace(/stupid/gi, "blasted");
        words = words.replace(/angry/gi, "bilge-sucking");
        words = words.replace(/excited/gi, "all-fired");
        words = words.replace(/attack/gi, "board");
        words = words.replace(/crew/gi, "hearties");
        words = words.replace(/captain/gi, "Cap'n");
        words = words.replace(/goodbye/gi, "fare thee well");
        words = words.replace(/left/gi, "port");
        words = words.replace(/right/gi, "starboard");
        words = words.replace(/ahead/gi, "fore");
        words = words.replace(/behind/gi, "aft");
        words = words.replace(/food/gi, "grub");
        words = words.replace(/ship/gi, "vessel");
        words = words.replace(/enemy/gi, "scurvy dog");
        words = words.replace(/danger/gi, "peril");
        words = words.replace(/ocean/gi, "sea");
        words = words.replace(/sail/gi, "hoist");
        words = words.replace(/sword/gi, "cutlass");
        words = words.replace(/treasure/gi, "booty");
        words = words.replace(/sick/gi, "groggy");
        words = words.replace(/flag/gi, "colors");
        words = words.replace(/no/gi, "nay");
        words = words.replace(/never/gi, "ne'er");
        words = words.replace(/boy/gi, "lad");
        words = words.replace(/girl/gi, "lass");
        words = words.replace(/kill/gi, "keelhaul");
        words = words.replace(/run/gi, "scurry");
        words = words.replace(/help/gi, "aid");
        words = words.replace(/steal/gi, "plunder");

        // Further Pirate Vocabulary
        words = words.replace(/crew member/gi, "swab");
        words = words.replace(/legs/gi, "sea legs");
        words = words.replace(/yes sir/gi, "aye aye, Cap'n");
        words = words.replace(/no sir/gi, "nay, Cap'n");
        words = words.replace(/soon/gi, "anon");
        words = words.replace(/wait/gi, "hold fast");
        words = words.replace(/talk/gi, "parley");
        words = words.replace(/fight/gi, "scrap");
        words = words.replace(/crowded/gi, "full o' lubbers");
        words = words.replace(/truth/gi, "the honest truth");
        words = words.replace(/water/gi, "sea water");
        words = words.replace(/bottle/gi, "flagon");
        words = words.replace(/barrel/gi, "cask");
        words = words.replace(/dirty/gi, "foul");
        words = words.replace(/lazy/gi, "layabout");
        words = words.replace(/look out/gi, "keep yer eyes peeled");
        words = words.replace(/captured/gi, "taken prisoner");
        words = words.replace(/understand/gi, "get yer sea legs");
        words = words.replace(/celebrate/gi, "raise the Jolly Roger");
        words = words.replace(/whale/gi, "Leviathan");
        words = words.replace(/fight/gi, "cutlass battle");
        words = words.replace(/revenge/gi, "payback from the deep");
        words = words.replace(/angry/gi, "in a right boil");
        words = words.replace(/quiet/gi, "silent as the grave");
        words = words.replace(/scared/gi, "shiver me timbers!");
        words = words.replace(/crowd/gi, "throng o' fools");
        words = words.replace(/sea/gi, "briny deep");
        words = words.replace(/eat/gi, "feast");
        words = words.replace(/celebrate/gi, "revel");
        words = words.replace(/spy/gi, "lookout");
        words = words.replace(/punish/gi, "lash");
        words = words.replace(/victory/gi, "spoil o' war");
        words = words.replace(/sun/gi, "fiery orb");
        words = words.replace(/storm/gi, "tempest");
        words = words.replace(/flag/gi, "colors");
        words = words.replace(/clothes/gi, "garb");
        words = words.replace(/trap/gi, "snare");
        words = words.replace(/luck/gi, "fortune");
        words = words.replace(/treasure map/gi, "map to riches");
        words = words.replace(/navigator/gi, "steersman");
        words = words.replace(/revenge/gi, "vengeance");
        words = words.replace(/weak/gi, "lily-livered");
        words = words.replace(/coward/gi, "yellow-bellied");
        words = words.replace(/prison/gi, "brig");
        words = words.replace(/whale/gi, "kraken");
        words = words.replace(/curse/gi, "hex");
        words = words.replace(/shipmate/gi, "companion of the sea");
        words = words.replace(/fear/gi, "dread");
        words = words.replace(/strong/gi, "stout");
        words = words.replace(/brave/gi, "valiant");
        words = words.replace(/hard/gi, "tough");
        words = words.replace(/fierce/gi, "ferocious");
        words = words.replace(/escape/gi, "slip away");
        words = words.replace(/captivity/gi, "chains");
        words = words.replace(/battle/gi, "fracas");
        words = words.replace(/strategy/gi, "plan o' attack");
        words = words.replace(/order/gi, "command");
        words = words.replace(/bribe/gi, "sweeten the pot");
        words = words.replace(/talkative/gi, "blabbermouth");
        words = words.replace(/conflict/gi, "quarrel");
        words = words.replace(/run away/gi, "make sail");
        words = words.replace(/punishment/gi, "payback");
        words = words.replace(/scold/gi, "berate");
        words = words.replace(/adventure/gi, "exploit");
        words = words.replace(/strange/gi, "peculiar");
        words = words.replace(/creepy/gi, "spooky");
        words = words.replace(/mysterious/gi, "dark and sinister");
        words = words.replace(/hurry/gi, "hasten");
        words = words.replace(/treachery/gi, "betrayal");
        words = words.replace(/enemy ship/gi, "rival vessel");
        words = words.replace(/new/gi, "fresh");
        words = words.replace(/old/gi, "ancient");
        words = words.replace(/struggle/gi, "brawl");
        words = words.replace(/traitor/gi, "turncoat");
        words = words.replace(/trust/gi, "faith");
        words = words.replace(/mistake/gi, "blunder");
        words = words.replace(/honor/gi, "valor");
        words = words.replace(/betray/gi, "double-cross");
        words = words.replace(/defend/gi, "protect the treasure");
        words = words.replace(/peace/gi, "tranquility");
        words = words.replace(/home/gi, "port o' call");
        words = words.replace(/journey/gi, "voyage");
        words = words.replace(/time/gi, "tide");
        words = words.replace(/work/gi, "labor");
        words = words.replace(/goal/gi, "aim");
        words = words.replace(/ambition/gi, "aspiration");
        words = words.replace(/dangerous/gi, "treacherous");
        words = words.replace(/valuable/gi, "precious");
        words = words.replace(/battlefield/gi, "field o' honor");
        words = words.replace(/treachery/gi, "double-crossin'");
        words = words.replace(/march/gi, "trudge");
        words = words.replace(/desire/gi, "longing");
        words = words.replace(/fearless/gi, "undaunted");
        words = words.replace(/swift/gi, "quick");
        words = words.replace(/glory/gi, "fame");
        words = words.replace(/legacy/gi, "inheritance");
        words = words.replace(/legacy/gi, "inheritance");
        words = words.replace(/servant/gi, "lackey");
        words = words.replace(/plan/gi, "scheme");
        words = words.replace(/surprise/gi, "shock");
        words = words.replace(/dangerously/gi, "perilously");
        words = words.replace(/royalty/gi, "nobility");
        words = words.replace(/thief/gi, "rascal");
        words = words.replace(/spy/gi, "snoop");
        words = words.replace(/grumpy/gi, "surly");
        words = words.replace(/silly/gi, "foolish");
        words = words.replace(/faint/gi, "faint-hearted");
        words = words.replace(/grateful/gi, "thankful");
        words = words.replace(/shiny/gi, "glimmering");
        words = words.replace(/surround/gi, "enclose");
        words = words.replace(/willing/gi, "ready");
        words = words.replace(/confused/gi, "bewildered");
        words = words.replace(/navigate/gi, "steer");
        words = words.replace(/punctual/gi, "on the dot");
        words = words.replace(/chase/gi, "pursue");
        words = words.replace(/attack/gi, "assault");
        words = words.replace(/propose/gi, "offer");
        words = words.replace(/disguise/gi, "cloak");
        words = words.replace(/become/gi, "turn into");
        words = words.replace(/overcome/gi, "conquer");
        words = words.replace(/victorious/gi, "triumphant");
        words = words.replace(/treachery/gi, "betrayal");
        words = words.replace(/wealth/gi, "riches");
        words = words.replace(/interest/gi, "fascination");
        words = words.replace(/attract/gi, "lure");
        words = words.replace(/plan/gi, "plot");
        words = words.replace(/honest/gi, "straightforward");
        words = words.replace(/sailor/gi, "seafarer");
        words = words.replace(/oath/gi, "sworn vow");
        words = words.replace(/truthful/gi, "honest as the day is long");
        words = words.replace(/fake/gi, "sham");
        words = words.replace(/wander/gi, "drift");
        words = words.replace(/stranger/gi, "unknown face");
        words = words.replace(/challenge/gi, "trial");
        words = words.replace(/obstacle/gi, "hurdle");
        words = words.replace(/defeat/gi, "vanquish");
        words = words.replace(/destroy/gi, "annihilate");
        words = words.replace(/certain/gi, "sure");
        words = words.replace(/treasure chest/gi, "booty box");
        words = words.replace(/fearful/gi, "afraid");
        words = words.replace(/careful/gi, "cautious");
        words = words.replace(/remarkable/gi, "noteworthy");
        words = words.replace(/opportunity/gi, "chance");
        words = words.replace(/triumph/gi, "victory");
        words = words.replace(/surprise/gi, "shock");
        words = words.replace(/fame/gi, "renown");
        words = words.replace(/mercy/gi, "clemency");
        words = words.replace(/journey/gi, "odyssey");
        words = words.replace(/darkness/gi, "shadows");
        words = words.replace(/friendship/gi, "comradeship");
        words = words.replace(/quick/gi, "nimble");
        words = words.replace(/time/gi, "hourglass");
        words = words.replace(/capture/gi, "snatch");
        words = words.replace(/escape/gi, "break free");
        words = words.replace(/journey/gi, "quest");
        words = words.replace(/restore/gi, "return");
        words = words.replace(/damage/gi, "harm");
        words = words.replace(/spend/gi, "utilize");
        words = words.replace(/battlefield/gi, "theater o' war");
        words = words.replace(/treasure map/gi, "chart");
        words = words.replace(/friendship/gi, "brotherhood");
        words = words.replace(/trade/gi, "barter");
        words = words.replace(/forgive/gi, "pardon");
        words = words.replace(/warrior/gi, "brave");
        words = words.replace(/law/gi, "code");
        words = words.replace(/foul/gi, "filthy");
        words = words.replace(/kind/gi, "gracious");
        words = words.replace(/superior/gi, "better");
        words = words.replace(/join/gi, "ally");
        words = words.replace(/collaborate/gi, "team up");
        words = words.replace(/overcome/gi, "prevail");
        words = words.replace(/fortunate/gi, "lucky");
        words = words.replace(/valiant/gi, "brave-hearted");
        words = words.replace(/sorrow/gi, "grief");
        words = words.replace(/friendship/gi, "fellowship");
        words = words.replace(/valiant/gi, "gallant");
        words = words.replace(/deceive/gi, "trick");
        words = words.replace(/grace/gi, "elegance");
        words = words.replace(/deal/gi, "transaction");
        words = words.replace(/battlefield/gi, "field o' glory");
        words = words.replace(/bold/gi, "daring");
        words = words.replace(/intelligent/gi, "clever");
        words = words.replace(/dangerous/gi, "life-threatening");
        words = words.replace(/treachery/gi, "treason");
        words = words.replace(/treasure hunt/gi, "booty chase");
        words = words.replace(/treasure seeker/gi, "fortune hunter");
        words = words.replace(/a lot/gi, "a heap");
        words = words.replace(/victory parade/gi, "celebration o' triumph");
        words = words.replace(/merchant/gi, "trader");
        words = words.replace(/kindness/gi, "benevolence");
        words = words.replace(/homecoming/gi, "returning to port");
        words = words.replace(/discover/gi, "uncover");
        words = words.replace(/defend/gi, "guard");
        words = words.replace(/wealthy/gi, "rich");
        words = words.replace(/debt/gi, "dun");
        words = words.replace(/navigate/gi, "sail through");
        words = words.replace(/stronghold/gi, "fortress");
        words = words.replace(/wealthy/gi, "opulent");
        words = words.replace(/suffer/gi, "endure");
        words = words.replace(/journey/gi, "expedition");
        words = words.replace(/disregard/gi, "neglect");
        words = words.replace(/threat/gi, "danger");
        words = words.replace(/betrayal/gi, "backstab");
        words = words.replace(/victorious/gi, "champion");
        words = words.replace(/secret/gi, "hidden");
        words = words.replace(/dream/gi, "vision");
        words = words.replace(/opponent/gi, "adversary");
        words = words.replace(/fearful/gi, "afraid");
        words = words.replace(/brotherhood/gi, "brotherly love");
        words = words.replace(/punish/gi, "discipline");
        words = words.replace(/friend/gi, "companion");
        words = words.replace(/explore/gi, "search");
        words = words.replace(/victorious/gi, "triumphant");
        words = words.replace(/adventure/gi, "expedition");
        words = words.replace(/bravery/gi, "courage");
        words = words.replace(/traitor/gi, "turncoat");
        words = words.replace(/leader/gi, "captain");
        words = words.replace(/servant/gi, "lackey");
        words = words.replace(/believe/gi, "have faith");
        words = words.replace(/dare/gi, "challenge");
        words = words.replace(/threatening/gi, "menacing");
        words = words.replace(/promise/gi, "vow");
        words = words.replace(/battle/gi, "conflict");
        words = words.replace(/joke/gi, "jest");
        words = words.replace(/bravery/gi, "courage");
        words = words.replace(/happiness/gi, "joy");
        words = words.replace(/truth/gi, "veracity");
        words = words.replace(/clue/gi, "hint");
        words = words.replace(/treasure/gi, "booty");
        words = words.replace(/courageous/gi, "gallant");
        words = words.replace(/precious/gi, "valuable");
        words = words.replace(/wealth/gi, "riches");
        words = words.replace(/conquer/gi, "vanquish");
        words = words.replace(/plunder/gi, "loot");
        words = words.replace(/captain/gi, "Cap'n");
        words = words.replace(/land/gi, "shore");
        words = words.replace(/mighty/gi, "powerful");
        words = words.replace(/raider/gi, "pillager");
        words = words.replace(/defense/gi, "guard");
        words = words.replace(/aggressive/gi, "hostile");
        words = words.replace(/bravery/gi, "fortitude");
        words = words.replace(/defiance/gi, "resistance");
        words = words.replace(/bond/gi, "connection");
        words = words.replace(/slander/gi, "defamation");
        words = words.replace(/ambition/gi, "aspiration");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/debt/gi, "obligation");
        words = words.replace(/victor/gi, "champion");
        words = words.replace(/legend/gi, "tale");
        words = words.replace(/marooned/gi, "stranded");
        words = words.replace(/sailor/gi, "mariner");
        words = words.replace(/enjoy/gi, "relish");
        words = words.replace(/betray/gi, "double-cross");
        words = words.replace(/gather/gi, "collect");
        words = words.replace(/influence/gi, "sway");
        words = words.replace(/impact/gi, "effect");
        words = words.replace(/survivor/gi, "rescuee");
        words = words.replace(/evidence/gi, "proof");
        words = words.replace(/opulent/gi, "luxurious");
        words = words.replace(/confront/gi, "face off");
        words = words.replace(/victory/gi, "triumph");
        words = words.replace(/obstacle/gi, "barrier");
        words = words.replace(/leadership/gi, "command");
        words = words.replace(/strategy/gi, "tactics");
        words = words.replace(/fortune/gi, "wealth");
        words = words.replace(/seize/gi, "take hold");
        words = words.replace(/journey/gi, "adventure");
        words = words.replace(/strategy/gi, "battle plan");
        words = words.replace(/commander/gi, "head honcho");
        words = words.replace(/treasure island/gi, "isle o' riches");
        words = words.replace(/secret/gi, "concealed");
        words = words.replace(/weapon/gi, "armament");
        words = words.replace(/honor/gi, "pride");
        words = words.replace(/fear/gi, "dread");
        words = words.replace(/battle plan/gi, "strategy");
        words = words.replace(/sailor/gi, "shipmate");
        words = words.replace(/enemy ship/gi, "foe's vessel");
        words = words.replace(/mission/gi, "quest");
        words = words.replace(/victorious/gi, "triumphant");
        words = words.replace(/relief/gi, "ease");
        words = words.replace(/conqueror/gi, "victor");
        words = words.replace(/rage/gi, "fury");
        words = words.replace(/daring/gi, "bold");
        words = words.replace(/treachery/gi, "betrayal");
        words = words.replace(/fearless/gi, "undaunted");
        words = words.replace(/battlefield/gi, "field o' battle");
        words = words.replace(/sneaky/gi, "sly");
        words = words.replace(/trustworthy/gi, "reliable");
        words = words.replace(/hardship/gi, "struggle");
        words = words.replace(/dangerous/gi, "risky");
        words = words.replace(/happening/gi, "occurrence");
        words = words.replace(/reminder/gi, "prompt");
        words = words.replace(/strong/gi, "sturdy");
        words = words.replace(/unite/gi, "come together");
        words = words.replace(/treasure hunter/gi, "booty seeker");
        words = words.replace(/hidden/gi, "concealed");
        words = words.replace(/devious/gi, "sly");
        words = words.replace(/dark/gi, "shadowy");
        words = words.replace(/immortal/gi, "everlasting");
        words = words.replace(/strength/gi, "might");
        words = words.replace(/adventure/gi, "quest");
        words = words.replace(/warrior/gi, "fighter");
        words = words.replace(/acquire/gi, "gain");
        words = words.replace(/intention/gi, "purpose");
        words = words.replace(/betrayal/gi, "treachery");
        words = words.replace(/survivor/gi, "rescuee");
        words = words.replace(/defend/gi, "protect");
        words = words.replace(/resolve/gi, "determination");
        words = words.replace(/thief/gi, "raider");
        words = words.replace(/victor/gi, "winner");
        words = words.replace(/captured/gi, "taken");
        words = words.replace(/hero/gi, "champion");
        words = words.replace(/trophy/gi, "prize");
        words = words.replace(/honor/gi, "integrity");
        words = words.replace(/leader/gi, "chief");
        words = words.replace(/challenge/gi, "test");
        words = words.replace(/influence/gi, "sway");
        words = words.replace(/collaborate/gi, "team up");
        words = words.replace(/accuse/gi, "blame");
        words = words.replace(/intent/gi, "goal");
        words = words.replace(/mission/gi, "operation");
        words = words.replace(/challenge/gi, "trial");
        words = words.replace(/triumph/gi, "victory");
        words = words.replace(/command/gi, "direct");
        words = words.replace(/acquire/gi, "gain");
        words = words.replace(/fear/gi, "dread");
        words = words.replace(/gathering/gi, "collecting");
        words = words.replace(/clever/gi, "smart");
        words = words.replace(/devise/gi, "design");
        words = words.replace(/brave/gi, "valiant");
        words = words.replace(/betrayal/gi, "treachery");
        words = words.replace(/cunning/gi, "slyness");
        words = words.replace(/scoundrel/gi, "rascal");
        words = words.replace(/opportunity/gi, "chance");
        words = words.replace(/captain/gi, "commander");
        words = words.replace(/wealthy/gi, "affluent");
        words = words.replace(/victor/gi, "winner");
        words = words.replace(/ambush/gi, "sneak attack");
        words = words.replace(/heroic/gi, "valiant");
        words = words.replace(/cunning/gi, "sly");
        words = words.replace(/rescue/gi, "save");
        words = words.replace(/treachery/gi, "betrayal");
        words = words.replace(/reward/gi, "bounty");
        words = words.replace(/hasten/gi, "rush");
        words = words.replace(/pursue/gi, "chase");
        words = words.replace(/pleasure/gi, "delight");
        words = words.replace(/brave/gi, "bold");
        words = words.replace(/persuade/gi, "convince");
        words = words.replace(/resolve/gi, "settle");
        words = words.replace(/cherish/gi, "treasure");
        words = words.replace(/encounter/gi, "meet");
        words = words.replace(/believe/gi, "think");
        words = words.replace(/plan/gi, "scheme");
        words = words.replace(/victorious/gi, "triumphant");
        words = words.replace(/mission/gi, "operation");
        words = words.replace(/bravado/gi, "confidence");
        words = words.replace(/incredible/gi, "fantastic");
        words = words.replace(/helpful/gi, "supportive");
        words = words.replace(/cunning/gi, "sly");
        words = words.replace(/heroic/gi, "brave");
        words = words.replace(/aspiration/gi, "desire");
        words = words.replace(/journey/gi, "voyage");
        words = words.replace(/challenge/gi, "trial");
        words = words.replace(/spirit/gi, "soul");
        words = words.replace(/ambitious/gi, "driven");
        words = words.replace(/fate/gi, "destiny");
        words = words.replace(/gold/gi, "treasure");
        words = words.replace(/surrender/gi, "give in");
        words = words.replace(/sneaky/gi, "sly");
        words = words.replace(/inquire/gi, "ask");
        words = words.replace(/kind/gi, "benevolent");
        words = words.replace(/darkness/gi, "shadows");
        words = words.replace(/unseen/gi, "hidden");
        words = words.replace(/deceive/gi, "mislead");
        words = words.replace(/captured/gi, "caught");
        words = words.replace(/hope/gi, "wish");
        words = words.replace(/bravery/gi, "valor");
        words = words.replace(/victorious/gi, "successful");
        words = words.replace(/harm/gi, "injury");
        words = words.replace(/gather/gi, "assemble");
        words = words.replace(/mercy/gi, "compassion");
        words = words.replace(/treasure/gi, "booty");
        words = words.replace(/happy/gi, "joyful");
        words = words.replace(/captain/gi, "shipmaster");
        words = words.replace(/brave/gi, "gallant");
        words = words.replace(/strong/gi, "robust");
        words = words.replace(/wealthy/gi, "rich");
        words = words.replace(/reward/gi, "prize");
        words = words.replace(/friend/gi, "mate");
        words = words.replace(/fearful/gi, "timorous");
        words = words.replace(/faithful/gi, "loyal");
        words = words.replace(/companion/gi, "friend");
        words = words.replace(/restore/gi, "bring back");
        words = words.replace(/search/gi, "seek");
        words = words.replace(/wealthy/gi, "prosperous");
        words = words.replace(/treachery/gi, "betrayal");
        words = words.replace(/persuade/gi, "convince");
        words = words.replace(/bravery/gi, "courage");
        words = words.replace(/benevolent/gi, "kind");
        words = words.replace(/frustrated/gi, "exasperated");
        words = words.replace(/treasure/gi, "hoard");
        words = words.replace(/exploration/gi, "voyage");
        words = words.replace(/intelligent/gi, "sharp");
        words = words.replace(/glory/gi, "renown");
        words = words.replace(/legacy/gi, "inheritance");
        words = words.replace(/reward/gi, "compensation");
        words = words.replace(/triumphant/gi, "victorious");
        words = words.replace(/glory/gi, "fame");
        words = words.replace(/wealth/gi, "affluence");
        words = words.replace(/great/gi, "mighty");
        words = words.replace(/enemy/gi, "foe");
        words = words.replace(/treasure/gi, "booty");
        words = words.replace(/exploration/gi, "quest");
        words = words.replace(/victor/gi, "champion");
        words = words.replace(/seize/gi, "grab");
        words = words.replace(/mission/gi, "operation");
        words = words.replace(/captain/gi, "commander");
        words = words.replace(/valiant/gi, "brave");
        words = words.replace(/covert/gi, "secretive");
        words = words.replace(/join/gi, "ally");
        words = words.replace(/difficult/gi, "arduous");
        words = words.replace(/restore/gi, "return");
        words = words.replace(/mercenary/gi, "hired gun");
        words = words.replace(/treachery/gi, "treason");
        words = words.replace(/conquer/gi, "overcome");
        words = words.replace(/defender/gi, "protector");
        words = words.replace(/undefeated/gi, "unconquered");
        words = words.replace(/success/gi, "triumph");
        words = words.replace(/aggressor/gi, "attacker");
        words = words.replace(/search/gi, "hunt");
        words = words.replace(/friendly/gi, "cordial");
        words = words.replace(/reward/gi, "prize");
        words = words.replace(/treasure/gi, "booty");
        words = words.replace(/strong/gi, "powerful");
        words = words.replace(/victory/gi, "success");
        words = words.replace(/victorious/gi, "triumphant");
        words = words.replace(/wealthy/gi, "affluent");
        words = words.replace(/influence/gi, "sway");
        words = words.replace(/battlefield/gi, "field o' war");
        words = words.replace(/strategist/gi, "tactician");
        words = words.replace(/treasure/gi, "riches");
        words = words.replace(/honor/gi, "integrity");
        words = words.replace(/journey/gi, "expedition");
        words = words.replace(/find/gi, "discover");
        words = words.replace(/dare/gi, "challenge");
        words = words.replace(/treachery/gi, "treason");
        words = words.replace(/ambition/gi, "dream");
        words = words.replace(/betray/gi, "double-cross");
        words = words.replace(/betrayal/gi, "treachery");
        words = words.replace(/risk/gi, "danger");
        words = words.replace(/bold/gi, "brave");
        words = words.replace(/exploration/gi, "discovery");
        words = words.replace(/bond/gi, "tie");
        words = words.replace(/friend/gi, "companion");
        words = words.replace(/discover/gi, "uncover");
        words = words.replace(/become/gi, "turn into");
        words = words.replace(/journey/gi, "voyage");
        words = words.replace(/captain/gi, "leader");
        words = words.replace(/triumph/gi, "victory");
        words = words.replace(/skill/gi, "talent");
        words = words.replace(/fearless/gi, "undaunted");
        words = words.replace(/hero/gi, "champion");
        words = words.replace(/understanding/gi, "comprehension");
        words = words.replace(/journey/gi, "voyage");
        words = words.replace(/chase/gi, "pursue");
        words = words.replace(/ambition/gi, "aspiration");
        words = words.replace(/journey/gi, "pathway");
        words = words.replace(/protection/gi, "guarding");
        words = words.replace(/surprise/gi, "astonishment");
        words = words.replace(/influence/gi, "impact");
        words = words.replace(/strength/gi, "might");
        words = words.replace(/honor/gi, "prestige");
        words = words.replace(/bravery/gi, "valor");
        words = words.replace(/act/gi, "deed");
        words = words.replace(/battlefield/gi, "theater o' conflict");
        words = words.replace(/treachery/gi, "betrayal");
        words = words.replace(/deceive/gi, "mislead");
        words = words.replace(/foul/gi, "wicked");
        words = words.replace(/ambitious/gi, "aspiring");
        words = words.replace(/surround/gi, "encircle");
        words = words.replace(/heroic/gi, "brave");
        words = words.replace(/deceit/gi, "trickery");
        words = words.replace(/fortitude/gi, "courage");
        words = words.replace(/deceive/gi, "fool");
        words = words.replace(/brave/gi, "daring");
        words = words.replace(/truthful/gi, "honest");
        words = words.replace(/inspired/gi, "motivated");
        words = words.replace(/hidden/gi, "concealed");
        words = words.replace(/sneaky/gi, "underhanded");
        words = words.replace(/scoundrel/gi, "rascal");
        words = words.replace(/kindness/gi, "compassion");
        words = words.replace(/defender/gi, "protector");
        words = words.replace(/unwavering/gi, "steady");
        words = words.replace(/search/gi, "seek");
        words = words.replace(/difficult/gi, "challenging");
        words = words.replace(/restore/gi, "return");
        words = words.replace(/treasure/gi, "booty");
        words = words.replace(/courage/gi, "valor");
        words = words.replace(/guard/gi, "defend");
        words = words.replace(/glorious/gi, "grand");
        words = words.replace(/dare/gi, "challenge");
        words = words.replace(/believe/gi, "accept");
        words = words.replace(/gift/gi, "offering");
        words = words.replace(/heart/gi, "soul");
        words = words.replace(/rescue/gi, "save");
        words = words.replace(/friendship/gi, "companionship");
        words = words.replace(/support/gi, "aid");
        words = words.replace(/exploration/gi, "quest");
        words = words.replace(/heroic/gi, "valiant");
        words = words.replace(/wealth/gi, "riches");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/risky/gi, "hazardous");
        words = words.replace(/guardian/gi, "protector");
        words = words.replace(/noble/gi, "honorable");
        words = words.replace(/greatness/gi, "eminence");
        words = words.replace(/benevolent/gi, "generous");
        words = words.replace(/conquer/gi, "overcome");
        words = words.replace(/leader/gi, "chief");
        words = words.replace(/mission/gi, "assignment");
        words = words.replace(/fierce/gi, "intense");
        words = words.replace(/benevolent/gi, "kind");
        words = words.replace(/bravery/gi, "valor");
        words = words.replace(/risky/gi, "perilous");
        words = words.replace(/spirit/gi, "essence");
        words = words.replace(/victorious/gi, "successful");
        words = words.replace(/victory/gi, "win");
        words = words.replace(/kind/gi, "benevolent");
        words = words.replace(/victor/gi, "champion");
        words = words.replace(/defend/gi, "protect");
        words = words.replace(/stronghold/gi, "fortress");
        words = words.replace(/hero/gi, "champion");
        words = words.replace(/gift/gi, "token");
        words = words.replace(/mission/gi, "assignment");
        words = words.replace(/influence/gi, "sway");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/treachery/gi, "betrayal");
        words = words.replace(/hasten/gi, "hurry");
        words = words.replace(/honor/gi, "prestige");
        words = words.replace(/reward/gi, "prize");
        words = words.replace(/sneaky/gi, "devious");
        words = words.replace(/battlefield/gi, "theater of war");
        words = words.replace(/wealthy/gi, "prosperous");
        words = words.replace(/welfare/gi, "well-being");
        words = words.replace(/destiny/gi, "fate");
        words = words.replace(/rival/gi, "challenger");
        words = words.replace(/unexpected/gi, "surprising");
        words = words.replace(/inquire/gi, "ask");
        words = words.replace(/journey/gi, "expedition");
        words = words.replace(/ambition/gi, "drive");
        words = words.replace(/journey/gi, "adventure");
        words = words.replace(/bounty/gi, "reward");
        words = words.replace(/betray/gi, "double-cross");
        words = words.replace(/defender/gi, "guardian");
        words = words.replace(/aspiration/gi, "goal");
        words = words.replace(/treasure/gi, "booty");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/adventure/gi, "journey");
        words = words.replace(/heist/gi, "robbery");
        words = words.replace(/promise/gi, "commitment");
        words = words.replace(/great/gi, "mighty");
        words = words.replace(/journey/gi, "path");
        words = words.replace(/rich/gi, "affluent");
        words = words.replace(/ambitious/gi, "aspiring");
        words = words.replace(/enemies/gi, "foes");
        words = words.replace(/enemy/gi, "adversary");
        words = words.replace(/bravery/gi, "courage");
        words = words.replace(/seize/gi, "grab");
        words = words.replace(/ambition/gi, "desire");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/powerful/gi, "mighty");
        words = words.replace(/victory/gi, "triumph");
        words = words.replace(/partner/gi, "companion");
        words = words.replace(/perilous/gi, "dangerous");
        words = words.replace(/inquire/gi, "question");
        words = words.replace(/journey/gi, "quest");
        words = words.replace(/gift/gi, "offering");
        words = words.replace(/enemy/gi, "foe");
        words = words.replace(/defend/gi, "guard");
        words = words.replace(/wealthy/gi, "affluent");
        words = words.replace(/captain/gi, "commander");
        words = words.replace(/great/gi, "majestic");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/talent/gi, "skill");
        words = words.replace(/gather/gi, "assemble");
        words = words.replace(/hope/gi, "wish");
        words = words.replace(/pursue/gi, "chase");
        words = words.replace(/fearless/gi, "undaunted");
        words = words.replace(/triumph/gi, "victory");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/gift/gi, "offering");
        words = words.replace(/deceive/gi, "fool");
        words = words.replace(/trustworthy/gi, "dependable");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/gift/gi, "offering");
        words = words.replace(/hero/gi, "champion");
        words = words.replace(/trust/gi, "faith");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/treasure/gi, "booty");
        words = words.replace(/friend/gi, "companion");
        words = words.replace(/treasure/gi, "riches");
        words = words.replace(/heroic/gi, "valiant");
        words = words.replace(/powerful/gi, "mighty");
        words = words.replace(/kind/gi, "generous");
        words = words.replace(/success/gi, "triumph");
        words = words.replace(/wealthy/gi, "affluent");
        words = words.replace(/help/gi, "assist");
        words = words.replace(/perilous/gi, "dangerous");
        words = words.replace(/victory/gi, "win");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/kind/gi, "benevolent");
        words = words.replace(/journey/gi, "adventure");
        words = words.replace(/honor/gi, "integrity");
        words = words.replace(/journey/gi, "voyage");
        words = words.replace(/treasure/gi, "booty");
        words = words.replace(/great/gi, "fantastic");
        words = words.replace(/gift/gi, "present");
        words = words.replace(/gift/gi, "offering");
    });
});