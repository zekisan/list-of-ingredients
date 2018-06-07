class CreateDrinks < ActiveRecord::Migration[5.2]
  def change
    create_table :drinks do |t|
      t.string :title
      t.string :description
      t.string :steps
      t.string :source

      t.timestamps
    end

    create_table :ingredients do |t|
      t.references :drink, foreign_key: true
      t.string :description

      t.timestamps
    end
  end
end
