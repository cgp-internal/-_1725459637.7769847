def process_message(message, preference):
    if preference == 'uppercase':
        return message.upper()
    elif preference == 'lowercase':
        return message.lower()
    else:
        return "Invalid preference. Please choose 'uppercase' or 'lowercase'."