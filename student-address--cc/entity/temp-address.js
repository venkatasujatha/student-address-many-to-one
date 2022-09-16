const EntitySchema = require('typeorm').EntitySchema;
const {student} = require('/home/tectoro/Desktop/student-address--cc/entity/student.js')
const tempaddress = new EntitySchema({
    name:"tempaddress",
    tableName:"tempaddress",
    columns:{
        id:
        {
            primary:true,
            type:'int',
            generated:true,
        },
        address:
        {
            type:'varchar'
        }
    },
    relations:  

            { 

            student1: { 

                        target:student, 

                        type:'many-to-one', 

                        joinColumn:true, 

                        joinTable:true, 

                        cascade:true, 

                        inverseSide:"student", 

                        eager:true, 

                        nullable:true, 

                        referenceColumn:"id", 

} 

} 
})
module.exports = {tempaddress}