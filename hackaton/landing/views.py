from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def home(request):
    if request.method == 'POST':
        form_type = request.POST.get('form_type')
        
        if form_type == 'registration':
            name = request.POST.get('name')
            email = request.POST.get('email')
            school = request.POST.get('school')
            
            # TODO: Add logic to save registration data
            messages.success(request, 'Ďakujeme za registráciu! Budeme vás informovať o ďalších krokoch.')
            
        elif form_type == 'contact':
            name = request.POST.get('name')
            email = request.POST.get('email')
            subject = request.POST.get('subject')
            message = request.POST.get('message')
            
            # TODO: Add logic to send email
            messages.success(request, 'Ďakujeme za správu! Ozveme sa vám čo najskôr.')
            
        return redirect(request.path + '#' + form_type)
        
    return render(request, 'index.html')