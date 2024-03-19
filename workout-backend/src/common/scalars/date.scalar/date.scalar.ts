import { CustomScalar, Scalar } from "@nestjs/graphql";
import { ValueNode, Kind } from "graphql";

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<string, Date> { //Two args -> 1st is what is sent from client and 2nd is what is sent back to client
    description = 'Date custom scalar type';

    parseValue(value: string): Date {  // Parse values that we have recieved from the client
        return new Date(value);
    }

    serialize(value: Date | string): string { // executed before response is sent back to client
        console.log(`Serializing ${value}`);
        if (typeof value === 'string') {
            return value; // No need to convert string to Date and back to string
        }
        return value.toISOString();
    }

    parseLiteral(ast: ValueNode): Date {  // Handles what we get from the query which are in abstract syntact tree format
        if (ast.kind === Kind.INT) { // Checks if the value is an int
            return new Date(ast.value);
        } 
        return null;
    }
}
