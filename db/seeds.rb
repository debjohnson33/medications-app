# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

med1 = Medication.create(
	name: "Abilify", 
	generic_name: "Aripiprazole", 
	uses: "Aripiprazole is used to treat certain 
	mental/mood disorders (such as bipolar disorder, 
	schizophrenia, Tourette's disorder, and irritability 
	associated with autistic disorder). It may also be 
	used in combination with other medication to treat 
	depression.", 
	side_effects: "Aripiprazole is used 
	to treat certain mental/mood disorders (such as bipolar 
	disorder, schizophrenia, Tourette's disorder, and 
	irritability associated with autistic disorder). 
	It may also be used in combination with other 
	medication to treat depression.", 
	precautions: "This drug may make you dizzy or 
	drowsy or cause blurred vision. Do not drive, 
	use machinery, or do any activity that requires 
	alertness or clear vision until you are sure you 
	can perform such activities safely. Avoid alcoholic 
	beverages.")

med2 = Medication.create(
	name: "Zyrtec", 
	generic_name: "Cetirizine", 
	uses: "Cetirizine is an antihistamine used to 
	relieve allergy symptoms such as watery eyes, 
	runny nose, itching eyes/nose, sneezing, hives, 
	and itching.", 
	side_effects: "Drowsiness, tiredness, and dry 
	mouth may occur. Stomach pain may also occur, 
	especially in children. If any of these effects 
	persist or worsen, tell your doctor or 
	pharmacist promptly.", 
	precautions: "This drug may make you dizzy or 
	drowsy or cause blurred vision. Do not drive, 
	use machinery, or do any activity that requires 
	alertness or clear vision until you are sure you 
	can perform such activities safely. Avoid alcoholic 
	beverages.")

med3 = Medication.create(
	name: "Prilosec", 
	generic_name: "Omeprazole", 
	uses: "Omeprazole is used to treat certain 
	stomach and esophagus problems (such as acid reflux, 
	ulcers). It works by decreasing the amount of acid 
	your stomach makes. It relieves symptoms such as heartburn, 
	difficulty swallowing, and persistent cough.", 
	side_effects: "Headache or abdominal pain may occur. 
	If any of these effects persist or worsen, tell your 
	doctor or pharmacist promptly. Tell your doctor right 
	way if you have any serious side effects, including: 
	symptoms of a low magnesium blood level (such as 
	unusually fast/slow/irregular heartbeat, persistent 
	muscle spasms, seizures), signs of lupus (such as rash 
	on nose and cheeks, new or worsening joint pain).", 
	precautions: "Before using this medication, 
	tell your doctor or pharmacist your medical history, 
	especially of: liver disease, lupus. Some symptoms may 
	actually be signs of a more serious condition. Get 
	medical help right away if you have: heartburn with 
	lightheadedness/sweating/dizziness, 
	chest/jaw/arm/shoulder pain (especially with shortness 
	of breath, unusual sweating), unexplained weight loss.")

review1 = Review.create(rating: 4, comment: "Good medication.", medication_id: 1)
review2 = Review.create(rating: 5, comment: "Excellent medication! Works very well.", medication_id: 2)
review3 = Review.create(rating: 3, comment: "Makes me sleepy and have dry mouth.", medication_id: 2)