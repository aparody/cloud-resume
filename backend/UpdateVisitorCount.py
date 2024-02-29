import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('visitor-count')

def lambda_handler(event, context):
    # Parse the incoming request
    body = json.loads(event['body'])
    visitor_id = body['visitor_id']

    # Update the visitor count in DynamoDB
    response = table.update_item(
        Key={
            'visitor_id': visitor_id
        },
        UpdateExpression="SET visit_count = visit_count + :incr",
        ExpressionAttributeValues={
            ':incr': 1
        },
        ReturnValues="UPDATED_NEW"
    )

    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'Visitor count updated successfully'})
    }
