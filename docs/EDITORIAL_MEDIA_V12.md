# Editorial images — stable, unique, first-party delivery

The magazine's three distinct subjects are represented by three distinct photographs,
served as static assets directly from the project's Cloudflare Worker:

- Elder care / selecting a caregiver: `/assets/photography/care-grooming.webp` — Pexels #29354077
- Family / planning home care: `/assets/photography/home-interior.webp` — Pexels #10258622
- Technology / future of family services: `/assets/photography/medical-tablet.webp` — Pexels #4266934

Other local photographs:

- `care-companionship.webp` — #29372534
- `care-visit.webp` — #29372727
- `care-support.webp` — #29372730
- `care-senior.webp` — #29372724
- `healthcare-digital.webp` — #5327864
- `learning-class.webp` — #5212655

Source: `https://www.pexels.com/photo/<description>-<id>/` or corresponding
`https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg`.
License: Pexels free stock image license. Subjects are not employees/clients of EAI.

Previous V11 code loaded remote images in the visitor's browser. When those requests
failed, all magazine cards switched to the same small old fallback image.
V12 fixes the actual dependency and removes the repeated fallback.
The media-acquisition workflow is temporary and must be removed after the files
are present and verified in the Git repository.
