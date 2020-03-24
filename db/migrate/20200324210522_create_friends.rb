class CreateFriends < ActiveRecord::Migration[6.0]
  def change
    create_table :friends do |t|
      t.string :name
      t.string :avatar
      t.string :occupation
      t.string :gender

      t.timestamps
    end
  end
end
